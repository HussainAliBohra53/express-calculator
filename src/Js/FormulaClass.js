import * as VarUtility from './VarUtility';
export class FxClass{
    constructor(name){
        this.name=name;
        this.result='';
        this.desc='';
        this.varList=new Map();
        this.fxList=new Map();
        this.expString='';
        this.expDisplayString='';        
    }
     
       toObj() {
        //get serialisible fields
        const {name,result,desc,expString, expDisplayString,varList,fxList} = this;
        
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

   Copy=()=>{
    let F=new FxClass(this.name);
    F.expDisplayString=this.expDisplayString;
    F.expString=this.expString;
    F.desc=this.desc;
    F.result=this.result;
    F.varList=VarUtility.copyVarMap(this.varList);
    for(let[key,value] of this.fxList){
        F.fxList.set(key,value.Copy());
    }
    return F;
    }
    Reset=()=>{
        this.result='';
        this.expDisplayString='';
        this.expString='';
        this.fxList=new Map();
        this.varList=new Map();
        this.desc='';
    }
}
