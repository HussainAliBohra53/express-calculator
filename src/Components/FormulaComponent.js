import { useContext, useState } from "react"
import HtmlParser from "react-html-parser";
import { ExpContext } from "./MainContext"
import * as Utility2 from '../Js/VarUtility';
import * as MathUtility from '../Js/MathUtility';
import * as FxUtility from '../Js/FormulaUtility';
import './../css/theme.css';
import './../css/formulaList.css'
export function FxHolder(props){
let fxData=props.data;
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
vars.push(<div className="var-wrapper bg-light"><div className="inner-var-name ">{key}</div><div className="fx-var-input"><input name={key} onChange={onVarChange} className=" no-style-input h-100 w-75 float-end" value={value}/></div></div>)
}
let fxs2=[];
for(let [key,value] of fxData.fxList){
    fxs2.push(<FxHolder OnFxChange={OnFxChange} name={key} data={value} parent={false}/>)
    }
return (
<div className="w-100 pt-2">
<table style={{tableLayout:'fixed',width:'100%'}}>
<tr>
            <td style={{width:'40px'}}><button style={{display:props.parent?'inline-block':'none'}} title="Append to calculator screen" className="cal-icon no-style-button mr-2  bi bi-calculator" name={props.name} onClick={props.OnAddFx}></button>
            </td>
            <td style={{width:'40%'}}>
                <div title={props.name} className="w-100 large-name fx-name text-capitalize font-combo">{props.name}</div>
            </td>
            <td>
            <div title={fxData.result} style={{float:'right',width:'100%'}} className="bg-light large-name fx-result">{fxData.result}</div>
            </td>
            <td style={{width:'20px',paddingRight:'10px'}}><button title="delete" style={{display:props.parent?'inline-block':'none'}} name={props.name} onClick={props.OnDeleteFx} className="no-style-button bi bi-trash"></button></td>
            </tr>
            </table>
<table>
    <tr>
        <td width="20px"><span className={isExpanded?"bi bi-caret-down-fill":"bi bi-caret-right-fill"} onClick={onExpandeChange}></span></td>
        
        <td><span className="exp-label"><span className="text-break">{HtmlParser(fxData.expDisplayString)}</span></span></td>
    </tr>
</table>
<div style={{display:isExpanded?'block':'none',borderLeft:'1px solid red',marginLeft:'5px'}}>
<div className="var-container" style={{marginLeft:'5px'}}>{vars}</div>
<div className="">
{fxs2} 
</div>
</div>
</div>
)
}
export function FxListHolder(props){
    const context=useContext(ExpContext);
    let total=context.fxList.size;
    const OnFxChange=()=>{
    let fxCopy= FxUtility.shallowCopyFxList(context.fxList);
    context.updateFxList(fxCopy);
    props.OnFxChange();
    }

    const OnDeleteFx=(event)=>{
    let fxName=event.target.name;
    if(context.tracker.fxTracker.has(fxName)){
        alert("Deletion failed: Expression "+fxName+" is in use.");
        return;
    }
    let confirm=window.confirm("Are you sure to delete "+fxName);
    if(!confirm)return;
    let fxlist=FxUtility.shallowCopyFxList(context.fxList);
    fxlist.delete(fxName);
    context.updateFxList(fxlist);
    }

    let fxList=context.fxList;
    let fxs=[];
    for(let [key,value] of fxList){
        
        fxs.push(
            <tr>
                <td colSpan="3">
                <div className="fx-wrapper">
                <FxHolder OnFxChange={OnFxChange} OnAddFx={props.OnAddFx} OnDeleteFx={OnDeleteFx} name={key} data={value} parent={true}/> 
                </div>
                </td>
            </tr>
        )
        fxs.push(<tr style={{height:'5px'}}><td colSpan="3"></td></tr>)
    }
    function OnHideClick(event){
      event.preventDefault();
      props.OnHideClick(false);
    }
return (
    <div className="theme-box-border h-100 shadow fx-list-container">
        <div className="text-center w-100 pt-1">
         <div style={{color:'#fa8926'}} className="h4 d-inline-block">Expressions</div>
         <div className="d-inline-block float-end"><button className="p-2 bg-light fx-list-close no-style-button" onClick={OnHideClick}>X</button></div>
         <div style={{fontSize:'small'}} className="text-center text-white fst-italic">{fxList.size>0?''+fxList.size+' formulas':'No formula'}</div>
        </div>
        <table style={{width:'100%'}} className="fx-list-table">
            {fxs}
        </table>
        <div style={{display:total<1?'block':'none'}}>
            <div className="zero-fx-wrapper h-100">
            <div className="zero-fx-tile ">
                <div>
                <h2 className="text-center font-combo">Oops, No Expression</h2>
                <div className="px-5">
                    <ol>
                        <li>Click +V to add New Variables. 
                        <br/> e.g.<span className="bg-white mx-2 px-1">length=5</span>,<span className="px-1 bg-white mx-2">height=5</span>, ....<br/></li>
                        <li>Create expression using variables.
                        <div>e.g. <span className="rounded px-2 p-1 bg-white">length x heigth x 0.5</span></div></li>
                        <li>click +E to add expression in expression list</li>
                        <li>Give your expression a name</li>
                        <li>e.g. <span className="bg-white px-1 rounded">area_of_triangle</span></li>
                        <li>Click on the icon <span className="bi bi-calculator"></span> to use this expression into expression</li>
                    </ol>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}