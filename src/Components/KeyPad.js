
import React, {useEffect,useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './../css/keypad.css';
function KeyPadComponent(props){
    const [isInv, setIsInv]=useState(false);
    let angle=props.angle;
    function changeAngle(e){
    props.setAngle(e.name);
    angle=e.name;
    props.onClick(e);
    }
    useEffect(()=>{
        console.log("is inv changed");
    },[isInv])
    function btnInv_click(){
    setIsInv(!isInv);
    }
        return (
                <div id="keypad" style={{display:'flex'}} className="table table-hover w-100">
                <table width="100%">
                    <tbody>
                        <tr>
                            <td>
                            
                                <button className="btn w-100" name="rad" style={{backgroundColor:angle==='rad'?'#292b2c':'white',color:angle==='rad'?'white':'black'}} onClick={e => changeAngle(e.target)}>Rad</button>
                                
                            </td>
                            <td>
                                
                                <button className="btn w-100" name="deg" style={{backgroundColor:angle==='deg'?'#292b2c':'white',color:angle==='deg'?'white':'black'}} onClick={e => changeAngle(e.target)}>Deg</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="!" onClick={e => props.onClick(e.target)}>x!</button>
                                 
                            </td>
                        </tr> 
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="Inv" onClick={btnInv_click}>Inv</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name={isInv?'asin':'sin'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('sin<sup>-1</sup>'):'sin'}</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="ln" onClick={e => props.onClick(e.target)}>ln</button>
                                 
                            </td>
                        </tr> 
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="pi" onClick={e => props.onClick(e.target)}>&#x3C0;</button>
                                 
                            </td>
                            <td>
                               
                                <button className="btn w-100" name={isInv?'acos':'cos'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('cos<sup>-1</sup>'):'cos'}</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="log" onClick={e => props.onClick(e.target)}>Log</button>
                                 
                            </td>
                        </tr> 
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="e" onClick={e => props.onClick(e.target)}>e</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name={isInv?'atan':'tan'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('tan<sup>-1</sup>'):'tan'}</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="root" onClick={e => props.onClick(e.target)}>&#8730;</button>
                                 
                            </td>
                        </tr>  
                        <tr>
                            <td colSpan="2">
                                <button className="btn w-100" name="reset" onClick={e => props.onClick(e.target)}>reset</button>
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="pow" onClick={e => props.onClick(e.target)}>x<sup>y</sup></button>
                                 
                            </td>
                        </tr> 
                    </tbody>
                </table>                
                <table width='100%'>
                    <tbody>
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="(" onClick={e => props.onClick(e.target)}>(</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name=")" onClick={e => props.onClick(e.target)}>)</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="%" onClick={e => props.onClick(e.target)}>%</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="CE" onClick={e => props.onClick(e.target)} >&#8592;</button>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="7" onClick={e => props.onClick(e.target)}>7</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="8" onClick={e => props.onClick(e.target)}>8</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="9" onClick={e => props.onClick(e.target)}>9</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="/" onClick={e => props.onClick(e.target)}>/</button>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="4" onClick={e => props.onClick(e.target)}>4</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="5" onClick={e => props.onClick(e.target)}>5</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="6" onClick={e => props.onClick(e.target)}>6</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="*" onClick={e => props.onClick(e.target)}>x</button>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="1" onClick={e => props.onClick(e.target)}>1</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="2" onClick={e => props.onClick(e.target)}>2</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="3" onClick={e => props.onClick(e.target)}>3</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="-" onClick={e => props.onClick(e.target)}>-</button>
                                 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="btn w-100" name="0" onClick={e => props.onClick(e.target)}>0</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="." onClick={e => props.onClick(e.target)}>.</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="=" onClick={e => props.onClick(e.target)}>=</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="btn w-100" name="+" onClick={e => props.onClick(e.target)}>+</button>
                                 
                            </td>
                        </tr>
                    </tbody>
                </table>  
                </div>
            
        );
    }
export default KeyPadComponent;