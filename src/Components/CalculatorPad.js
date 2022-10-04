import React,{useContext,useEffect} from 'react';
import * as VarUtility from '../Js/VarUtility';
import ReactHtmlParser from 'react-html-parser';
import KeyPadComponent from './KeyPad';
import { ExpContext } from './MainContext';
import * as MathUtility from '../Js/MathUtility';
import * as KeypadUtility from '../Js/KeyPadUtility';
import './../css/responsiveStyle.css';
import './../css/theme.css';

export function CalculatorPad(props){
    let context=useContext(ExpContext);
    const keydown = function(event){
      console.log(`Key: ${event.key} as been pressed from ${event.srcElement.tagName}`);
        const validKeys=['1','2','3','4','5','6','7','8','9','0','.','Backspace','^','!','+','-','*','/','%','(',')','s','S','c','C','t','T','r','l','L','p'];
        if(validKeys.includes(event.key)&&event.srcElement.tagName!=='INPUT'){
        event.name=event.key;
        keypadClickHandler(event);
        } 
    }
    useEffect(() => {
      document.addEventListener('keydown',keydown);
      return () => document.removeEventListener("keydown",keydown);
    });
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
    if(event===undefined)return;
    let key=event.name;
    if(key===undefined)return;
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
      alert("Invalid Expression");
      return;
    }

    props.OnAddFxClick();
    }
    
    return (
        <div className="cal-pad-border h-100">         
            <div  className="cal-pad-header bg-dark text-center" style={{position:'relative',top:'0px',width:'100%'}}>
            <span className="px-3"><i style={{color:context.error?context.expDisplayString.length>0?'red':'green':'green'}}className="bi bi-lightning-charge-fill" title="Invalid Expression"></i></span>
            <span className=" text-white">Calculator PAD</span>
            </div>
          <div style={{position:'absolute',bottom:'0px'}}>
         <div className="container-fluid">
           <div className="">
             <div className="row">
            <div className="col-9">
            <div className="exp-wrapper">
            <span className="text-break main-exp" style={{letterSpacing:'1px',overflowX:'scroll'}}>{ReactHtmlParser(context.expDisplayString)}</span>
            </div>
           </div>
           <div className="col-3"><button className="new-exp" onClick={ValidateNewFx}>+E</button> </div>
          
           </div>
           </div>
           <hr className="mt-2 mb-2" />
           <div className="row">
            
            <div className="col-9 mb-2 text-break ans-wrapper">
             
            <span className="ans">{context.expString.length>0?context.result:'0'}</span>
           </div>
           <div className="col-3"><button onClick={props.displayModalgetVarName} className="calpad-new-var">+V</button> </div>
           </div>
           
         </div>
         <KeyPadComponent onClick={keypadClickHandler} angle={context.angle} setAngle={context.setAngle}/>
         </div>
        <div className="bottom-bar"></div>
        </div>
    )  }