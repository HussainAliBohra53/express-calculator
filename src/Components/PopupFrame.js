import { useState, useContext} from "react"
import { ExpContext } from "./MainContext";
import {validateVarName} from './../Js/VarUtility';
import {validateFunctionName} from './../Js/FormulaUtility';
import './../css/theme.css';
export function PopupFrame(props){

    return (
        <div class="modal" tabindex="-1" style={{display:props.display?'block':'none'}}>
        <div class="modal-dialog" style={{top:'20%',width:'fit-content'}} >
          <div class="modal-content">
            <div class="modal-header p-2">
              <h5 class="modal-title">{props.heading}</h5>
              <button type="button" onClick={props.closeModal} class="btn-close text-white"></button>
            </div>
            <div class="modal-body">
              {props.children}
            </div>
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
            setInput('');
        }
    }
    return(
        <> 
            <input className="input" value={input} onChange={inputEventHandler} placeholder="Variable Name"/>
            <button className="bg-dark rounded text-white font-monospace" style={{width:'60px',height:'30px'}} onClick={SaveVariableHandler}>Save</button>
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
     setInput('');
     props.OnSave(name);
    }
return (
    <>
        <input className="input d-inline-block w-50 m-2" value={input} onChange={OnInputChange}/><button onClick={OnSaveClick} className="bg-dark rounded text-white font-monospace" style={{width:'60px',height:'30px'}}>Save</button>
        <div className="text-danger">{msg}</div>
    </>
)
}