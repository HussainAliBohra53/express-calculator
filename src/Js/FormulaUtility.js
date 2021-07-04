import { FxClass } from './FormulaClass';
import * as Utility from './MathUtility';

export function DeepScopeGenerator(Fx){
    let scope=new Map();    
    for(let [key,value] of Fx.varList){
        scope.set(key,value);
    }
    for(let [key,value] of Fx.fxList){
        scope.set(key,Utility.calculateWithScope(value.expString,DeepScopeGenerator(value)));
    }
return Object.fromEntries(scope);
}

export function shallowCopyFxList(fxList){
    let newfxList=new Map();
    for(let [key,value] of fxList){
        newfxList.set(key,value);
    }
    return newfxList;
}
export function ValidateExpression(){
    return true;
}
export function fxListToJson(fxList){
    let sampleMap=new Map();
 for(let[key,value] of fxList){
  sampleMap.set(key,value.toObj());
 }
 return JSON.stringify(Object.fromEntries(sampleMap));
}
export function jsonToFx(json){
    return objToFxClass(JSON.parse(json))
    }
function FxtoObj(Obj){
    
        //get serialisible fields
        const {name,result,desc,expString, expDisplayString,varList,fxList} = Obj;
        
        //convert complex object representation JSON serialisible format
        const simplefxList= Object.fromEntries(   //convert map to plain object
          Array.from(
            fxList.entries(),                      //transform the map
            ([key, value]) => [key, value.toObj()] //convert map values to plain objects
          )
        );
        const simplevarList=Object.fromEntries(varList);
        //return plain object 
        return {
          name,
          result,
          desc,
          expString,
          expDisplayString,
          varList:simplevarList,
          fxList:simplefxList
      }
}
export function fxClasstoJson(fxClass){
    return JSON.stringify(FxtoObj(fxClass));
}
export function objToFxClass(obj) {
    //create a new instance
    const instance = new FxClass(obj.name);
    instance.result=obj.result;    instance.desc=obj.desc;
    instance.expString=obj.expString;
    instance.expDisplayString=obj.expDisplayString;
    instance.varList=new Map(Object.entries(obj.varList));
    //fill the instance `mapOfA` with the data from the input
    for (const [key, value] of Object.entries(obj.fxList)) {
      instance.fxList.set(key, objToFxClass(value));
    }
    return instance;
  }

export function jsonToFxList(json){
    let newMap=new Map();
    let map=new Map(Object.entries(JSON.parse(json)));
    for(let[key,value] of map){
        newMap.set(key,objToFxClass(value));
    }
    return newMap;
}
export function validateFunctionName(fxName,fxs){
    let format = /!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;
    if(fxName===""||fxName.length===0){
        return {status:false,msg:"Please enter some value."};
    }
    if(fxName.indexOf(' ') >= 0){return {status:false,msg:"space is not allowed."};}
    if(format.test(fxName)){
        return {status:false,msg:"special characters are not allowed."};
    }
    if(fxName.length>20)return {status:false,msg:"Name should not contains more than 10 characters"}
    for(let[key] of fxs){
        if(key.toUpperCase()===fxName)
        return {status:false,msg:""+fxName+" already exist."};
    }
return {status:true,msg:''};
}
export function addFxtoStacks(expStack,expDisplayStack,elemTracker,fxName){
    let l1=[...expStack];
    let l2=[...expDisplayStack];
    let l3=[...elemTracker];
    l1.push('(f_'+fxName+')');
    l2.push('<span style="color:orange">'+fxName+'</span>');
    l3.push('fx');
    return {'expStr':l1,'expDisStr':l2,'elemTracker':l3};
    }
