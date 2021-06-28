import React,{useContext,useEffect,useState} from 'react';
import {CalculatorPad} from './Components/CalculatorPad';
import {ExpContext} from './Components/SampleContext';
import * as VarUtility from './Js/VarUtility';
import * as MathUtility from './Js/MathUtility';
import { VarListHolder } from './Components/VarListHolder';
import {PopupFrame,ModelGetVarName,ModelGetFxName} from './Components/PopupFrame';
import { FxListHolder } from './Components/FormulaComponent';
import * as FxUtility from './Js/FormulaUtility';
import './css/theme.css';
import './css/responsiveStyle.css';
import { FxClass } from './Js/FormulaClass';
export function AppV2(){
    const context=useContext(ExpContext);
    const [displayVarModal,setDisplayVarModal]=useState(false);
    const [displayFxModal,setDisplayFxModal]=useState(false);
    const [displayFxList,setDisplayFxList]=useState(false);
    const [displayVarList,setDisplayVarList]=useState(false);
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
      if(r.status!='ok'){
        context.setError(true);
      }else{
        context.setResult(r.result);
        context.setError(false);
      }
    }

    const OnFxChange=()=>{
      let scope=MathUtility.scopeGeneratorFromMap(context.varList,context.fxList);
      let r=MathUtility.calculateWithScope(context.expString,scope);
      if(r.status!='ok'){
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
        if(r.status!='ok'){
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
    function OnFxListShow(event){
    event.preventDefault();
    setDisplayFxList(true);
    setDisplayVarList(false);
    }
    function OnVarListShow(event){
      event.preventDefault();
      setDisplayVarList(true);
      setDisplayFxList(false);
      }
    return(
        <div>
          <PopupFrame display={displayVarModal} closeModal={closeModal}>
            <ModelGetVarName OnSave={AddNewVar}/>
          </PopupFrame>
          <PopupFrame display={displayFxModal} closeModal={closeModal}>
            <ModelGetFxName OnSave={AddNewFx}/>
          </PopupFrame>
           <div className="d-lg-flex w-100">
            <div style={{writingMode:'vertical-lr'}} className="fx-list-toggle" >
             <span className="btn btn-primary" onClick={OnFxListShow}>Fx List</span>
            </div>
           <div className="formula-bar" style={{display:displayFxList?'block':'none'}}>
           <FxListHolder OnAddFx={OnAddFx} OnFxChange={OnFxChange} OnHideClick={setDisplayFxList}/>
           </div>
           <div style={{boxSizing:'border-box'}} className="calculator-pad w-100">
           <CalculatorPad displayModalgetVarName={displayModalgetVarName} OnAddFxClick={displayModalgetFxName}/>
           </div>
           <div style={{writingMode:'vertical-lr'}} className="var-bar-toggle">
             <span className="btn btn-warning" onClick={OnVarListShow}>Var List</span>
            </div>
           <div className="var-bar" style={{display:displayVarList?'block':'none'}}>
             <VarListHolder OnaddVarClick={OnaddVarClick} OnHideClick={setDisplayVarList} OnVarChange={OnVarChange} />  
           </div>
           </div>
        </div>
    )
}