import React,{createContext,useState} from 'react';
import * as fxUtility from './../Js/FormulaUtility';
export const ExpContext=createContext();
export const ExpProvider=({children})=>{
    const [expString,setExpString1] =useState(()=>{
        let a=JSON.parse(localStorage.getItem('expString'));
        if(a==null)return "";
        return a;
    });
    const [expDisplayString,setExpDisplayString1]=useState(()=>{
        let a=JSON.parse(localStorage.getItem('expDisplayString'));
        if(a==null)return "";
        return a; 
    });
    const [result,setResult1]=useState(()=>{
        return Number(JSON.parse(localStorage.getItem('result')));
    });
    const [angle,setAngle]=useState('deg');
    const [varList,updateVarList1]=useState(()=>{
      let a=localStorage.getItem('varList');
      if(a==null||a==="undefined"||a==""){
          return new Map();
      }
      return new Map(Object.entries(JSON.parse(a)));
    });
    const updateVarList=(vars)=>{
    let a=Object.fromEntries(vars);
    localStorage.setItem('varList',JSON.stringify(a));
    updateVarList1(vars);
    }
    const [expStack,updateExpStack1]=useState(()=>{
        let a=JSON.parse(localStorage.getItem('expStack'));
        if(a==null)return [];
        return a; 
    });
    const [expDisplayStack,updateExpDisplayStack1]=useState(()=>{
        let a=JSON.parse(localStorage.getItem('expDisplayStack'));
        if(a==null)return [];
        return a; 
    });
    const [elemTracker,updateElemTracker1]=useState(()=>{
        let a=localStorage.getItem('elemTracker');
        if(a==""||a==null)return [];
        return JSON.parse(a);
    });
    const updateElemTracker=(track)=>{
    updateElemTracker1(track);
    localStorage.setItem('elemTracker',JSON.stringify(track));
    }
    const [fxList,updateFxList1]=useState(()=>{
        let a=localStorage.getItem('fxList');
        if(a==null||a==="undefined"||a=="")return new Map();
        return fxUtility.jsonToFxList(a);
    })
    const [tracker,updateTracker1]=useState(()=>{
       let a=JSON.parse(localStorage.getItem('tracker'));
       if(a==null) return {varTracker:new Map(),fxTracker:new Map()};
       return {varTracker:new Map(Object.entries(a.varTracker)),fxTracker:new Map(Object.entries(a.fxTracker))};
    });
    const [error,setError1]=useState(()=>{
        return JSON.parse(localStorage.getItem('error'));
    });
    const setError=(err)=>{
        localStorage.setItem('error',JSON.stringify(err));
        setError1(err);
    }
    const setResult=(value)=>{
        setResult1(value);
        localStorage.setItem('result',JSON.stringify(value));
    }
    const setExpString=(str)=>{
   localStorage.setItem('expString',JSON.stringify(str));
   setExpString1(str);
   if(str=="")setResult(0);
    }
    const setExpDisplayString=(str)=>{
        localStorage.setItem('expDisplayString',JSON.stringify(str));
        setExpDisplayString1(str);
         }
    const updateExpDisplayStack=(vars)=>{
        localStorage.setItem('expDisplayStack',JSON.stringify(vars));
        updateExpDisplayStack1(vars);
         }
    const updateExpStack=(vars)=>{
       localStorage.setItem('expStack',JSON.stringify(vars));
       updateExpStack1(vars);
             }
    const updateTracker=(t)=>{
        let a=Object.fromEntries(t.varTracker);
        let b=Object.fromEntries(t.fxTracker);
        let c={varTracker:a,fxTracker:b};
        let json=JSON.stringify(c);
        localStorage.setItem('tracker',json);
        updateTracker1(t);
    }
    const updateFxList=(fxList)=>{
      let json=fxUtility.fxListToJson(fxList);
      localStorage.setItem('fxList',json);
      updateFxList1(fxList);
    }
    const reset=()=>{
        setResult('');
        setError('');
        setExpDisplayString('');
        setExpString('');
        updateElemTracker([]);
        updateExpStack([]);
        updateExpDisplayStack([]);
        updateTracker({varTracker:new Map(),fxTracker:new Map()});
    }     
    const resetAll=()=>{
        reset();
        updateVarList(new Map());
        updateFxList(new Map());
    }  
return (
    <ExpContext.Provider
    value={{
        reset,resetAll,
        expString,setExpString,
        result,setResult,
        expDisplayString,setExpDisplayString,
        angle,setAngle,
        varList,updateVarList,
        expStack,updateExpStack,
        expDisplayStack,updateExpDisplayStack,
        elemTracker,updateElemTracker,
        fxList,updateFxList,
        tracker,updateTracker,
        error,setError
        }}>
        {children}
    </ExpContext.Provider>
)
}
