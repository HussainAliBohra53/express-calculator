import * as VarUtility from '../Js/VarUtility';
import {useContext} from 'react';
import { ExpContext } from './SampleContext';
import './../css/theme.css';
import './../css/responsiveStyle.css';
import './../css/varlist.css';
export function VarHolder(props){
      
    return(
       <table style={{width:'100%'}}>
           <tr>
               <td><span title={props.name} class="varlist-var-name large-text">{props.name}</span></td><td>=</td>
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
      if(isNaN(value))return;
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
        <td><button title="append to calculator screen" className="no-style-button bi bi-calculator-fill" name={key} onClick={props.OnaddVarClick}></button></td>
        <td><VarHolder name={key} value={value} valueChange={varValueChangeHandler}/></td>
        <td><button onClick={OndeleteVar} name={key} className="no-style-button mx-2 bi bi-trash"></button></td>
        </tr>);
    }
return (
    <div className="theme-box-border shadow h-100">
        <div className="bg-dark w-100">
        <div className="float-start ml-3"><button className="var-list-close no-style-button text-white" onClick={OnHideClick}>X</button>
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
