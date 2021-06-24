import { useState, useContext} from "react"
import { ExpContext } from "./SampleContext";
import {validateVarName} from './../Js/VarUtility';
import {validateFunctionName} from './../Js/FormulaUtility';
import './../css/theme.css';
export function PopupFrame(props){

    return (
        <div style={{width:'100%',position:'fixed',height:'100vh',backgroundColor:'transparent',display:props.display?'flex':'none',flexDirection:'column',justifyContent:'space-around'}}>
            <div style={{top:'25%',display:"flex",justifyContent:'space-around'}}>
                <div>
                <div className="theme-box-border">
                    <div className="bg-dark"> 
                      {props.heading}
                    </div>
                    <button className="btn btn-dark align-content-end">X</button>
                </div>
               {props.children}
               </div>
            </div>
        </div>
    )
}
export function ModelGetVarName(props){
    let context=useContext(ExpContext);
    let [input, setInput]=useState('');
    let [error, setError]=useState('');
    const inputEventHandler=(event)=>{
        let name=event.target.value;
        setInput(name);
        let st=validateVarName(name,context.varList);
        if(!st.status){
            setError(st.msg);
            return;
        }
        setError('');
    }
    const SaveVariableHandler=()=>{
        if(validateVarName(input,context.varList).status){
            props.OnSave(input);
        }
    }
    return(
        <> 
            <input className="input" value={input} onChange={inputEventHandler} placeholder="Variable Name"/>
            <button className="btn btn-success" {...error.length>0?'disabled':''} onClick={SaveVariableHandler}>Save</button>
            <div className="text-center text-danger">{error}</div>
        </>
    )
}
export function ModelGetFxName(props){
    let context=useContext(ExpContext);
    const[input,setInput]=useState('');
    const[msg,setMsg]=useState('');
   
    const OnInputChange=(event)=>{
    let value=event.target.value;
    setInput(value);
    let s=validateFunctionName(value,context.fxList);
    if(!s.status){
    setMsg(s.msg);
    }else{
        setMsg('');
    }
    }
    const OnSaveClick=()=>{
     if(!validateFunctionName(input,context.fxList).status) return;
     let name=input;
     props.OnSave(name);
    }
return (
    <>
        <input className="input d-inline-block w-50 m-2" value={input} onChange={OnInputChange}/><button onClick={OnSaveClick} className="bg-dark rounded text-white font-monospace" style={{width:'60px',height:'30px'}}>Save</button>
        <div className="text-danger">{msg}</div>
    </>
)
}