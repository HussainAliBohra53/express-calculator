import {config} from './MathUtility';

export function OnkeypadClick(bname,expStack,expDisplayStack,elemTracker,postBackspace){

       if(bname==="undefined"){
   
       }
       else if(bname === "="){
       }
       else if(bname === "C"){
           expStack=[];
           expDisplayStack=[];
           elemTracker=[];
       }   
       else if(bname === "CE"){
           let name=expStack.pop();
           expDisplayStack.pop();
           let o=elemTracker.pop();
           postBackspace(o,name);
       }
       else if(bname==="root"){
           expStack.push('sqrt(');
           expDisplayStack.push('&#8730;(');
           elemTracker.push('opr');
       }
      else if(bname==="square"){
        expStack.push('^2');
        expDisplayStack.push('<sup>2</sup>');
        elemTracker.push('opr');

       }else if(bname==="pownegone"){
        expStack.push('^-1');
        expDisplayStack.push('<sup>-1</sup>');
        elemTracker.push('opr');
        
       }else if(bname==="/"){
           expStack.push('/');
           expDisplayStack.push('&#247;');
           elemTracker.push('opr');
       }else if(bname==="log"){
           expStack.push('log10(');
           expDisplayStack.push('log(');
           elemTracker.push('opr');
       }
       else if(bname==='ln'){
           expStack.push('ln(');
           expDisplayStack.push('ln(');
           elemTracker.push('opr');
       }
       else if(bname==='pi'){
           expStack.push('pi');
           expDisplayStack.push('&#x3C0;');
           elemTracker.push('opr');
       }
       else if(bname==='pow'){
           expStack.push('^');
           expDisplayStack.push('^');
           elemTracker.push('opr');
       }
       else if(bname==='sin'){
           expStack.push('sin(');
           expDisplayStack.push('Sin(');
           elemTracker.push('opr');
       }
       else if(bname==='asin'){
           expStack.push('asin(');
           expDisplayStack.push('Sin<sup>-1</sup>(');
           elemTracker.push('opr');
       }
       else if(bname==='cos'){
           expStack.push('cos(');
           expDisplayStack.push('Cos(');
           elemTracker.push('opr');
       }
       else if(bname==='acos'){
           expStack.push('cos(');
           expDisplayStack.push('Cos<sup>-1</sup>(');
           elemTracker.push('opr');
       }
       else if(bname==='tan'){
           expStack.push('tan(');
           expDisplayStack.push('tan(');
           elemTracker.push('opr');
       }
       else if(bname==='atan'){
           expStack.push('atan(');
           expDisplayStack.push('Tan<sup>-1</sup>(');
           elemTracker.push('opr');
       }
       else if(bname==='*'){
           expStack.push('*');
           expDisplayStack.push('&#215;');
           elemTracker.push('opr');
       }
       else if(bname==='deg'){
          config.angles='deg';
       }
       else if(bname==='rad'){
           config.angles='rad';
        }
       else {
          expStack.push(bname);
          expDisplayStack.push(bname);
          elemTracker.push('val');
       }
       
       return {'expStr':expStack,'expDisStr':expDisplayStack,'elemTracker':elemTracker}
   } 