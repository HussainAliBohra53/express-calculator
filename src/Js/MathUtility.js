import {create,all, map, exp} from 'mathjs';
export const config={angles:'deg'};
const math = create(all, config);
const fns1 = ['sin', 'cos', 'tan', 'sec', 'cot', 'csc'];
let replacements={};
fns1.forEach(function(name) {
  const fn = math[name] // the original function
  console.log(math);
  const fnNumber = function (x) {
    // convert from configured type of angles to radians
    switch (config.angles) {
      case 'deg':
        return fn(x / 360 * 2 * Math.PI)
      case 'grad':
        return fn(x / 400 * 2 * Math.PI)
      default:
        return fn(x)
    }
  }

  // create a typed-function which check the input types

  replacements[name] = math.typed(name, {
    'number': fnNumber,
    'Array | Matrix': function (x) {
      return math.map(x, fnNumber)
    }
  })
})

const fns2 = ['asin', 'acos', 'atan', 'atan2', 'acot', 'acsc', 'asec']
fns2.forEach(function(name) {
  const fn = math[name] // the original function

  const fnNumber = function (x) {
    const result = fn(x)

    if (typeof result === 'number') {
      // convert to radians to configured type of angles
      switch(config.angles) {
        case 'deg':  return result / 2 / Math.PI * 360
        case 'grad': return result / 2 / Math.PI * 400
        default: return result
      }
    }

    return result
  }

  // create a typed-function which check the input types
  replacements[name] = math.typed(name, {
    'number': fnNumber,
    'Array | Matrix': function (x) {
      return math.map(x, fnNumber)
    }
  })
})
math.import(replacements, {override: true});
export function calculate(expString){
try{
    let result=math.evaluate(expString);
    if(!isNaN(result)) return result.toString();
    return 'error';
}catch(e){
  console.log(e.msg);
return 'error'
}
}
export function calculateWithScope(expString,scope){
  console.log("expstring"+expString);
  console.log(scope);
  try{
      let result=math.evaluate(expString,scope);
      if(!isNaN(result)) return {result:result.toString(),status:'ok',error:''}
      return {result:result.toString(),status:'img',error:'imaginary value not supported'};
  }catch(e){
   
  return {result:'',status:'err',error:e.message};
  }
  }
export function arrayToString(lst){
    let exp='';
    for(let values of lst){
    exp+=values;
    }
    return exp;
    }
 
export function scopeGenerator(varList){
  let scope=Object.fromEntries(varList);
  return scope;
}
export function scopeGeneratorFromMap(varList,fxList){
  let m=new Map();
  for(let [key,value] of varList){
      m.set('v_'+key,value);
  }
  for(let [key,value] of fxList){
      m.set('f_'+key,value.result);
  }
  return Object.fromEntries(m);
  } 