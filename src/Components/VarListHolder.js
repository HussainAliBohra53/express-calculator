import * as VarUtility from '../Js/VarUtility';
import {useContext} from 'react';
import { ExpContext } from './MainContext';
import './../css/theme.css';
import './../css/responsiveStyle.css';
import './../css/varlist.css';
export function VarHolder(props){
      
    return(
       <table style={{width:'100%',tableLayout:'fixed'}}>
           <tr>
               <td><span title={props.name} class="varlist-var-name large-name">{props.name}</span></td>
               
               <td><input className="input w-100" name={props.name} value={props.value} onChange={props.valueChange}/></td>
           </tr>
       </table>
    )
    }
export function VarListHolder(props){
    const context=useContext(ExpContext);
    const vars=[];
    let total=context.varList.size;
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
        let ans=window.confirm("Are you sureto delete "+name);
        if(ans){
        deleteVar(name);
        }
     }
    for(let [key,value] of context.varList){
    vars.push(
    <tr>
        <td width="30px"><button title="append to calculator screen" className="no-style-button bi bi-calculator-fill" name={key} onClick={props.OnaddVarClick}></button></td>
        <td><VarHolder name={key} value={value} valueChange={varValueChangeHandler}/></td>
        <td width="40px">
            <div className="w-100" style={{paddingRight:'10px'}}>
            <button onClick={OndeleteVar} name={key} className="no-style-button bi bi-trash"></button>
            </div>
            </td>
        </tr>);
    }
return (
    <div className="theme-box-border shadow h-100">
        <div className="w-100">
        <div className="float-start px-2 bg-light"><button className="var-list-close no-style-button" onClick={OnHideClick}>X</button>
        </div>
        <h3 className="text-center varbar-header-title">Variables</h3>
        </div>
        <table>
            {vars}
        </table>
        <div style={{display:total<1?'block':'none'}} className="h-100">
            <div className="zero-var-wrapper">
            <div className="zero-var-tile shadow-sm">
                <div>
                <h2 className="text-center">Zero Var</h2>
                <h4 className="px-5">Click On <button onClick={props.displayModalgetVarName} className="btn btn-primary">+V</button> to add New Variable</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}
