export function newVar(varList,varName,varValue){
let vars= copyVarMap(varList);
vars.set(varName,varValue);
return vars;
}
export function validateVarName(varName,varList){
   let format = /[!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+/;
   if(varName===""||varName.length===0){
       return {status:true,msg:"please enter some value."};
   }

   if(format.test(varName)){
    return {status:false,msg:"special characters are not allowed."};
   }
   if(varName.length>10) return {status:false,msg:"Variable name length should not more than 10 characters."};
   if(varName.indexOf(' ') >= 0){
       return {status:false,msg:"space is not allowed."};
}
   for(let[key] of varList){
       if(key.toUpperCase()===varName.toUpperCase()){
       return {status:false,msg:""+varName+" already exist."};
       }
   }
   return {status:true,msg:""};
}

export function canDelete(varName){
    return true;
}
export function copyVarMap(varList){
    let m=new Map();
    for(let[key,value] of varList){
      m.set(key,value);
    }
    return m;
}
export function addVarToStacks(expStack,expDisplayStack,elemTracker,varName){
let l1=[...expStack];
let l2=[...expDisplayStack];
let l3=[...elemTracker];
l1.push('(v_'+varName+')');
l2.push('<span style="color:blue">'+varName+'</span>');
l3.push('var');
return {'expStr':l1,'expDisStr':l2,'elemTracker':l3};
}

   
export function expTracker(tracker,opr,key){
    
    let varlist=copyVarMap(tracker.varTracker);
    let fxlist=copyVarMap(tracker.fxTracker);
    switch(opr){
        case 'addVar':{
        if(varlist.has(key)){
        let c=varlist.get(key);
        c++;
        varlist.set(key,c);
        }else{
            varlist.set(key,1);    
        }
        }
        break;
        case 'addFx':{
            if(fxlist.has(key)){    
                let c=fxlist.get(key);
                c++;
                fxlist.set(key,c);
                }else{
                    fxlist.set(key,1);
                }
        }
        break;
        case 'removeVar':{
            if(varlist.has(key)){
                let c=varlist.get(key);
                c--;
                if(c===0){
                    varlist.delete(key);
                }else{         
                    varlist.set(key,c);
                }
        }
       }
        break;
        case 'removeFx':{
            if(fxlist.has(key)){
                let c=fxlist.get(key);
                c--;
                if(c===0){
                    fxlist.delete(key);
                }else{         
                    fxlist.set(key,c);
                }
        }
        }
    }
return {'varTracker':varlist,'fxTracker':fxlist};    
}
export function updateFxWithTracker(tracker,Fx,varList,Flist){
    let fxs=new Map();
    let vars=new Map();

for(let [key,value] of tracker.varTracker){
    vars.set(key,varList.get(key));
}
for(let [key,value] of tracker.fxTracker){
    fxs.set(key,Flist.get(key).Copy());
    }
Fx.varList=vars;
Fx.fxList=fxs;
return Fx;
}