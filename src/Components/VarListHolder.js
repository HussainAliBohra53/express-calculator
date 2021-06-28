import * as VarUtility from '../Js/VarUtility';
import {useContext} from 'react';
import { ExpContext } from './SampleContext';
import './../css/theme.css';
import './../css/responsiveStyle.css';
export function VarHolder(props){
      
    return(
       <table style={{width:'100%'}}>
           <tr>
               <td><span title={props.name} style={{maxWidth:'100px', overflow:'hidden',whiteSpace:"nowrap",display:'inline-block',textOverflow:'ellipsis'}}>{props.name}</span></td><td>=</td>
               <td><input className="input w-100" name={props.name} value={props.value} onChange={props.valueChange}/></td>
           </tr>
       </table>
    )
    }
export function VarListHolder(props){
    const context=useContext(ExpContext);
    const vars=[];
    const varValueChangeHandler=(event)=>{
      let value=event.target.value;
      let name=event.target.name;
      let lst=VarUtility.copyVarMap(context.varList);
      lst.set(name,value);
      context.updateVarList(lst);
      props.OnVarChange(lst);
    }
    const OnHideClick=()=>{
        props.OnHideClick(false);
    }
    const deleteVar=(varName)=>{
     if(context.varList.has(varName)){
         if(context.tracker.varTracker.has(varName)){alert(varName+" is in use. Can't delete"); return;}
         let varList=VarUtility.copyVarMap(context.varList);
         varList.delete(varName);
         context.updateVarList(varList);
     }
    }
    const OndeleteVar=(event)=>{
        let name=event.target.name;
        deleteVar(name);
     }
    for(let [key,value] of context.varList){
    vars.push(
    <tr>
        <td><button className="bi bi-plus" name={key} onClick={props.OnaddVarClick}></button></td>
        <td><VarHolder name={key} value={value} valueChange={varValueChangeHandler}/></td>
        <td><button onClick={OndeleteVar} name={key} className="btn btn-secondary bi bi-trash"></button></td>
        </tr>);
    }
return (
    <div className="theme-box-border shadow h-100">
        <div className="bg-dark w-100">
        <div className="float-start ml-3"><button className="no-style-button text-white" onClick={OnHideClick}>X</button>
        </div>
        <div style={{color:'#8c96e7',textAlign:'center'}} className="font-monospace">Variables</div>
        </div>
        <table>
            <tr><td></td><td></td><td></td></tr>
            {vars}
        </table>
    </div>
)
}
