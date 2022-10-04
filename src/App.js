import React,{useContext,useEffect,useState} from 'react';
import {CalculatorPad} from './Components/CalculatorPad';
import {ExpContext} from './Components/MainContext';
import * as VarUtility from './Js/VarUtility';
import * as MathUtility from './Js/MathUtility';
import { VarListHolder } from './Components/VarListHolder';
import {PopupFrame,ModelGetVarName,ModelGetFxName} from './Components/PopupFrame';
import { FxListHolder } from './Components/FormulaComponent';
import * as FxUtility from './Js/FormulaUtility';
import './css/theme.css';
import './css/responsiveStyle.css';
import { FxClass } from './Js/FormulaClass';
import './Js/KeypadEventBind';
export function AppV2(props){
  
    const context=useContext(ExpContext);
    const [displayVarModal,setDisplayVarModal]=useState(false);
    const [displayFxModal,setDisplayFxModal]=useState(false);
    const [displayFxList,setDisplayFxList]=useState(!props.isMobile);
    const [displayVarList,setDisplayVarList]=useState(!props.isMobile);

    useEffect(()=>{
    
      document.title=context.result;
    });

    useEffect(()=>{
      
    })
    const OnaddVarClick=(event)=>{
      let name=event.target.name;
      let st=VarUtility.addVarToStacks(context.expStack,context.expDisplayStack,context.elemTracker,name);
      let t=VarUtility.expTracker(context.tracker,'addVar',name);
      setResult(st.expStr,st.expDisStr);
      context.updateElemTracker(st.elemTracker);
      context.updateTracker(t);
      }

    const OnAddFx=(event)=>{
      let name=event.target.name;
      let st=FxUtility.addFxtoStacks(context.expStack,context.expDisplayStack,context.elemTracker,name);
      let t=VarUtility.expTracker(context.tracker,'addFx',name);
      setResult(st.expStr,st.expDisStr);
      context.updateElemTracker(st.elemTracker);
      context.updateTracker(t);
    }

    const OnVarChange=(list)=>{
      let scope=MathUtility.scopeGeneratorFromMap(list,context.fxList);
      let r=MathUtility.calculateWithScope(context.expString,scope);
      if(r.status!=='ok'){
        context.setError(true);
      }else{
        context.setResult(r.result);
        context.setError(false);
      }
    }

    const OnFxChange=()=>{
      let scope=MathUtility.scopeGeneratorFromMap(context.varList,context.fxList);
      let r=MathUtility.calculateWithScope(context.expString,scope);
      if(r.status!=='ok'){
        context.setError(false);
      }else{
        context.setResult(r.result);
        context.setError(true);
      }
    }
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
    const displayModalgetVarName=()=>{
          setDisplayVarModal(true);
    } 
    const displayModalgetFxName=()=>{
      setDisplayFxModal(true);
     }  
    const closeModal=()=>{
      setDisplayVarModal(false);
      setDisplayFxModal(false);
    }
    const AddNewVar=(varName)=>{
     let lst=VarUtility.copyVarMap(context.varList);
     lst.set(varName,context.result);
     context.updateVarList(lst);
     closeModal();

    }
   const ClearAllHandler=()=>{
   context.resetAll();
   }
    const AddNewFx=(fxName)=>{
      let newFx=new FxClass(fxName);
      newFx.expString=context.expString;
      newFx.expDisplayString=context.expDisplayString;
      newFx.result=context.result;
      VarUtility.updateFxWithTracker(context.tracker,newFx,context.varList,context.fxList);
      let fxList=FxUtility.shallowCopyFxList(context.fxList);
      fxList.set(fxName,newFx);
      context.updateFxList(fxList);
      closeModal();
    }
    const OnFxListShow=()=>{
    setDisplayFxList(true);
    setDisplayVarList(false);
    }
    function OnVarListShow(){
      setDisplayVarList(true);
      setDisplayFxList(false);
      }
      
      
    return(
        <div>
          <PopupFrame heading="Enter the variable name" display={displayVarModal} closeModal={closeModal}>
            <ModelGetVarName OnSave={AddNewVar}/>
          </PopupFrame>
          <PopupFrame heading="Enter the Expression name" display={displayFxModal} closeModal={closeModal}>
            <ModelGetFxName OnSave={AddNewFx}/>
          </PopupFrame>
           <div className="d-lg-flex">
            <div id="eb" style={{writingMode:'vertical-lr'}} className="fx-list-toggle">
             <span  onClick={OnFxListShow}>Expressions</span>
            </div>
            <div style={{writingMode:'vertical-lr'}} className="var-bar-toggle">
             <span onClick={OnVarListShow}>variables</span>
            </div>
           <div id="fbar" className="formula-bar" style={{display:displayFxList?'block':'none'}}>
           <FxListHolder OnAddFx={OnAddFx} OnFxChange={OnFxChange} OnHideClick={setDisplayFxList}/>
           </div>
           <div className="calculator-pad">
           <CalculatorPad displayModalgetVarName={displayModalgetVarName} OnAddFxClick={displayModalgetFxName}/>
           </div>
           
           <div className="var-bar" style={{display:displayVarList?'block':'none'}}>
             <VarListHolder displayModalgetVarName={displayModalgetVarName} OnaddVarClick={OnaddVarClick} OnHideClick={setDisplayVarList} OnVarChange={OnVarChange} />  
           </div>
           </div>
        </div>
    )
}