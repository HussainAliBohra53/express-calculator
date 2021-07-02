import React,{useContext} from 'react';
import ReactHtmlParser from 'react-html-parser';
import * as VarUtility from '../Js/VarUtility';
import KeyPadComponent from './KeyPad';
import { ExpContext } from './SampleContext';
import * as MathUtility from '../Js/MathUtility';
import * as KeypadUtility from '../Js/KeyPadUtility';
import './../css/theme.css';
export function CalculatorPad(props){
    let context=useContext(ExpContext);
    const setResult=(arr1,arr2)=>{
        context.updateExpStack(arr1);
        context.updateExpDisplayStack(arr2);
        let Texpstring=MathUtility.arrayToString(arr1);
        let scope=MathUtility.scopeGeneratorFromMap(context.varList,context.fxList);
        let r=MathUtility.calculateWithScope(Texpstring,scope);
        context.setExpString(Texpstring);
        let Texpdisstring=MathUtility.arrayToString(arr2);
        context.setExpDisplayString(Texpdisstring);
        if(r.status!=='ok'){
          context.setError(true);
        }else{
          context.setResult(r.result);
          context.setError(false);
        }
    }

    const postBackspace=(opr,name)=>{
      let t;
      if(opr==='var'){
      let n=name.substring(3,name.length-1);
      t=VarUtility.expTracker(context.tracker,'removeVar',n);
      context.updateElemTracker(t);
      context.updateTracker(t);
      }
      if(opr==='fx'){
      let n=name.substring(3,name.length-1);
      t=VarUtility.expTracker(context.tracker,'removeFx',n);
      context.updateElemTracker(t);
      context.updateTracker(t);
      }

    }
    const reset=()=>{
    context.reset();
    }
    const keypadClickHandler=(event)=>{
    let key=event.name;
    if(key==="reset") {reset();return;}
    let arr=[...context.expStack];
    let arr2=[...context.expDisplayStack];
    let arr3=[...context.elemTracker];
    let a= KeypadUtility.OnkeypadClick(key,arr,arr2,arr3,postBackspace);
    setResult(a.expStr,a.expDisStr);
    context.updateElemTracker(a.elemTracker);
    }
    
    const ValidateNewFx=()=>{
    if(context.expString.length===0){
      alert("please write expression");
      return;
    }
    if(context.error){
      alert("Invalid Expression");
      return;
    }
    if(!(context.elemTracker.includes('var')||context.elemTracker.includes('fx'))){
      alert("Expression should have at least one variable value");
      return;
    }
    props.OnAddFxClick();
    }
    return (
        <div className="theme-box-border h-100 ">         
            <div className="bg-dark text-center" style={{position:'relative',top:'0px',width:'100%'}}>
            <span className="px-3"><i style={{color:context.error?'red':'green'}}className="bi bi-lightning-charge-fill" title="Invalid Expression"></i></span>
            <span className=" text-white">Calculator PAD</span>
            </div>
          <div style={{position:'absolute',bottom:'0px'}}>
         <div className="container-fluid" >
           
             <div className="row">
             
            <div className="col-9">
            <div className="exp-wrapper">
            <span className="text-break" style={{letterSpacing:'1px',overflowX:'scroll'}}>{ReactHtmlParser(context.expDisplayString)}</span>
            </div>
           </div>
           <div className="col-3"><button className="new-exp" onClick={ValidateNewFx}>E+</button> </div>
           </div>
           <hr className="mt-2 mb-2" />
           <div className="row">
            
            <div className="col-9 mb-2">
             
            <span style={{alignContent:'baseline'}}>Ans={context.expString.length>0?context.result:'0'}</span>
           </div>
           <div className="col-3"><button onClick={props.displayModalgetVarName} className="new-var" style={{float:'left',margin:'0px'}}>V+</button> </div>
           </div>
           
         </div>
         <KeyPadComponent onClick={keypadClickHandler} angle={context.angle} setAngle={context.setAngle}/>
         </div>
        <div className="bottom-bar"></div>
        </div>
    )
}