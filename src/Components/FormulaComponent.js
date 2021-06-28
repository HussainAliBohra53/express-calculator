import { useContext, useState } from "react"
import HtmlParser from "react-html-parser";
import { ExpContext } from "./SampleContext"
import * as Utility2 from '../Js/VarUtility';
import * as MathUtility from '../Js/MathUtility';
import * as FxUtility from '../Js/FormulaUtility';
import './../css/theme.css';
export function FxHolder(props){
let fxData=props.data;
console.log(fxData);
let [isExpanded,setExpanded]=useState(false);
const onExpandeChange=()=>{
    setExpanded(!isExpanded);
}
let  vars=[];
const OnFxChange=()=>{
    let scope=MathUtility.scopeGeneratorFromMap(fxData.varList,fxData.fxList);
    let r=MathUtility.calculateWithScope(fxData.expString,scope);
    if(r.status!=="ok"){

    }else{
        fxData.result=r.result;
        props.OnFxChange();
    }
}

const onVarChange=(event)=>{
let name=event.target.name;
let value=event.target.value;
let varmap=Utility2.copyVarMap(fxData.varList);
varmap.set(name,value);
console.log("fx var list");
console.log(varmap);
fxData.varList=varmap;
let scope=MathUtility.scopeGeneratorFromMap(fxData.varList,fxData.fxList);
let r=MathUtility.calculateWithScope(fxData.expString,scope);
if(r.status!=="ok"){

}else{
    fxData.result=r.result;
    props.OnFxChange();
}
}
for(let [key,value] of fxData.varList){
vars.push(<div>{key}=<input name={key} onChange={onVarChange} className="input w-75" value={value}/></div>)
}
let fxs2=[];
for(let [key,value] of fxData.fxList){
    fxs2.push(<FxHolder OnFxChange={OnFxChange} name={key} data={value}/>)
    }
return (
<div className="w-100 dark">
<table>
    <tr>
        <td><span className={isExpanded?"bi bi-caret-down-fill":"bi bi-caret-right-fill"} onClick={onExpandeChange}></span></td>
        <td><span>{HtmlParser(fxData.expDisplayString)}</span></td>
        <td>{fxData.result}</td>
    </tr>
</table>
<div style={{display:isExpanded?'block':'none'}}>
<div className="d-flex b">{vars}</div>
{fxs2} 
</div>
</div>
)
}
export function FxListHolder(props){
    const context=useContext(ExpContext);
    const OnFxChange=()=>{
    let fxCopy= FxUtility.shallowCopyFxList(context.fxList);
    context.updateFxList(fxCopy);
    props.OnFxChange();
    }

    const OnDeleteFx=(event)=>{
    let fxName=event.target.name;
    if(context.tracker.fxTracker.has(fxName)){
        alert("Can't delete "+fxName+". It's in Use");
        return;
    }
    let fxlist=FxUtility.shallowCopyFxList(context.fxList);
    fxlist.delete(fxName);
    context.updateFxList(fxlist);
    }

    let fxList=context.fxList;
    let fxs=[];
    for(let [key,value] of fxList){
        fxs.push(
        <tr>
            <td><button className="add-var-button" name={key} onClick={props.OnAddFx}></button></td>
            <td><div style={{display:"flex"}}><span>{key}={value.result}</span></div></td>
            <td><button name={key} onClick={OnDeleteFx} className="no-style-button bi bi-trash"></button></td>
            </tr>
        );
        fxs.push(
            <tr>
                <td colSpan="3">
                <FxHolder OnFxChange={OnFxChange} name={key} data={value}/> 
                </td>
            </tr>
        )
    }
    function OnHideClick(event){
      event.preventDefault();
      props.OnHideClick(false);
    }
return (
    <div className="theme-box-border h-100 shadow">
        <div className="text-center bg-dark w-100">
         <div style={{color:'#fa8926'}} className="font-monospace d-inline-block">Formulas</div>
         <div className="d-inline-block float-end"><button className="fx-list-close no-style-button text-white" onClick={OnHideClick}>X</button></div>
         <div style={{fontSize:'small'}} className="text-center text-white fst-italic">{fxList.size>0?''+fxList.size+' formulas':'No formula'}</div>
        </div>
        <table style={{width:'100%'}}>
            <tr><td></td><td></td><td></td></tr>
            {fxs}
        </table>
    </div>
)
}