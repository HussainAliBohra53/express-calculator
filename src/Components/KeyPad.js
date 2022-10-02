
import React, {useEffect,useState} from 'react';
import ReactHtmlParser from 'react-html-parser';
import './../css/keypad.css';
import './../css/responsiveStyle.css';
import './../css/theme.css';
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
                <div id="keypad">
                <table id="oprPad">
                    <tbody>
                        <tr>
                            <td>
                                <button className="no-style-button" name="rad" style={{backgroundColor:angle==='rad'?'#292b2c':'white',color:angle==='rad'?'white':'black'}} onClick={e => changeAngle(e.target)}>Rad</button>
                            </td>
                            <td>
                                
                                <button className="no-style-button" name="deg" style={{backgroundColor:angle==='deg'?'#292b2c':'white',color:angle==='deg'?'white':'black'}} onClick={e => changeAngle(e.target)}>Deg</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button" name="Inv" onClick={btnInv_click}>Inv</button>
 
                            </td>

                            <td>
                                 
                            <button className="no-style-button" name="!" onClick={e => props.onClick(e.target)}>x!</button>

                            </td>
                            <td>
                            <button className="no-style-button" name="pow" onClick={e => props.onClick(e.target)}>x<sup>y</sup></button>

                                 
                            </td>
                            
                        </tr> 
                        <tr>
                        <td>
                                 
                                 <button className="no-style-button" name="ln" onClick={e => props.onClick(e.target)}>ln</button>
                                  
                             </td>
                            <td>
                            <button className="no-style-button" name={isInv?'asin':'sin'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('sin<sup>-1</sup>'):'sin'}</button>

 
                            </td>
                            <td>
                                <button className="no-style-button" name={isInv?'acos':'cos'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('cos<sup>-1</sup>'):'cos'}</button>
                                 
                            </td>
                            <td>
                            <button className="no-style-button" name={isInv?'atan':'tan'} onClick={e => props.onClick(e.target)}>{isInv?ReactHtmlParser('tan<sup>-1</sup>'):'tan'}</button>
                                 
                            </td>
                        
                           <td>
                           <button className="no-style-button" name="pi" onClick={e => props.onClick(e.target)}>&#x3C0;</button>

                           </td>
                        </tr>  
                        <tr>
                        <td>
                                 
                                 <button className="no-style-button" name="e" onClick={e => props.onClick(e.target)}>e</button>
                                  
                             </td>
                             <td>
                             <button className="no-style-button" name="log" onClick={e => props.onClick(e.target)}>Log</button>

                                  
                             </td>
                             <td>
                             <button className="no-style-button" name="pow10" onClick={e => props.onClick(e.target)}>10<sup>x</sup></button>
                                  
                             </td>
                            
                            <td>
                            <button className="no-style-button" name="square" onClick={e => props.onClick(e.target)}>x<sup>2</sup></button>
                            </td>
                            <td>
                            <button className="no-style-button" name="pownegone" onClick={e => props.onClick(e.target)}>x<sup>-1</sup></button>
                            </td>
                        </tr> 
                    </tbody>
                </table>                
                <table id="numPad">
                    <tbody>
                        <tr>
                            <td>
                                <button className="no-style-button" name="(" onClick={e => props.onClick(e.target)}>(</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button" name=")" onClick={e => props.onClick(e.target)}>)</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button" name="%" onClick={e => props.onClick(e.target)}>%</button>
                                 
                            </td>
                            <td>
                            <button className="no-style-button" name="root" onClick={e => props.onClick(e.target)}>&#8730;</button>

                                 
                            </td>

                            <td style={{borderLeft:'1px solid white'}}>
                            <button className="no-style-button bi bi-backspace" name="Backspace" onClick={e => props.onClick(e.target)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="7" onClick={e => props.onClick(e.target)}>7</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="8" onClick={e => props.onClick(e.target)}>8</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="9" onClick={e => props.onClick(e.target)}>9</button>
                                 
                            </td>
                            <td>
                            <button className="no-style-button" name="-" onClick={e => props.onClick(e.target)}>-</button>

                            </td>
                            <td rowSpan="3" style={{borderLeft:'1px solid white'}}>     
                                  
                            <button className="no-style-button bi bi-arrow-clockwise" title="reset" name="reset" onClick={e => props.onClick(e.target)} />                                
                            </td>
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="4" onClick={e => props.onClick(e.target)}>4</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="5" onClick={e => props.onClick(e.target)}>5</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="6" onClick={e => props.onClick(e.target)}>6</button>
                                 
                            </td>
                            <td>
                            <button className="no-style-button" name="/" onClick={e => props.onClick(e.target)}>/</button>

                                 
                            </td>
                    
                        </tr>
                        <tr>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="1" onClick={e => props.onClick(e.target)}>1</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="2" onClick={e => props.onClick(e.target)}>2</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="3" onClick={e => props.onClick(e.target)}>3</button>
                                 
                            </td>
                            <td>
                            <button className="no-style-button" name="*" onClick={e => props.onClick(e.target)}>x</button>

                                 
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="0" onClick={e => props.onClick(e.target)}>0</button>
                                 
                            </td>
                            <td>
                                 
                                <button className="no-style-button text-primary" name="." onClick={e => props.onClick(e.target)}>.</button>
                                 
                            </td>
                            
                            <td>
                            <button className="no-style-button" name="+" onClick={e => props.onClick(e.target)}>+</button>
                            </td>
                            <td style={{borderLeft:'1px solid white'}}>
                            <button className="no-style-button" name="=" onClick={e => props.onClick(e.target)}>=</button>

                            </td>
                        </tr>
                    </tbody>
                </table>  
                </div>
            
        );
    }
export default KeyPadComponent;