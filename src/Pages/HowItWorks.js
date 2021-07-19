import { Link } from "react-router-dom";
import './../css/theme.css';
import homescreen from "./../images/howtouse/home-page-on-start.PNG";
import homescreenphone from './../images/howtouse/home-page-on-start-mobile.PNG';
import homescreenphoneVarbar from './../images/howtouse/home-mobile-varbar.PNG';
import homescreenphoneFxBar from './../images/howtouse/home-mobile-expressions.PNG';
import newvarname from './../images/howtouse/newvar-givename.PNG';
import myvar1InVarbar from './../images/howtouse/myvar1InVarbar.PNG';
import usevar from './../images/howtouse/usevar.png';
import expnamepopup from './../images/howtouse/expnamepopup.PNG';
import volofcone from './../images/howtouse/volofcone.PNG';
import fxinuse from './../images/howtouse/fxinuse.png';
import nestedfx from './../images/howtouse/nestedfx.png';
import multinestedfx from './../images/howtouse/multilevelnest.png';


export function HowItWorks(props){
    return(
        <>
        <div style={{marginTop:'10vh'}} className="w-100">
            
            <div className="d-flex w-100 justify-content-center">
           <div className="htu-body rounded shadow px-1 font-poppins" style={{fontSize:'large'}}>
           <div className="htu-title-wrapper">
                <h1 className="h1 text-center">How To Use</h1>
            </div>
               <h3>What is Express Calculator<h1 className="d-inline-block px-2">?</h1></h3>
            <div className="ec-defination">
             <p>
             Express Calculator is an online mathematical utility tool that features a scientific calculator, tools to save your calculated results in variables that can be used in later calculations and you can create your own equations or say expressions using these variables. An expression can be used with another expression and also could be nested into another expression.             </p>
            </div>  
            <h2>How To Use?</h2>
            <p>
            Express calculator is a very simple yet powerful tool to use. To make things simple for users we divided the screen into three parts.                
                <h5>1. Calculator Pad</h5>
                <h5>2. Variable Bar</h5>
                <h5>3. Expression List</h5>
                <br/>
                If you have already visited <Link to="/">Home</Link> page you might have seen below screen. This is screen where we will get our work done.
            </p>
            <figure className="figure">
                    <img src={homescreen} className="figure-img img-fluid rounded" alt="Express calculator home screen in mobile"/>
                     <figcaption className="figure-caption">Express Calculator Home screen </figcaption>
                    </figure>
            <p>
              Express Calculator is very responsive and provide easy to use User interface for mobile users. If you are accessing using your phone, you will get the below screen. Sections variable bar and expression list are not visible by default. Instead, there are two buttons, variables and Expressions to open the respective sections.
            </p>

             <div className="row">
                 <div className="col-md-4">
                     <figure className="figure">
                    <img src={homescreenphone} className="figure-img img-fluid rounded" alt="Express calculator home screen in mobile"/>
                     <figcaption className="figure-caption">Figure shows home screen users get when accessed from mobile. Vetical buttons variable and expressions are there to open Variables and expressions sections.    </figcaption>
                    </figure>
                 </div>
                 <div className="col-md-4">
                    <figure className="figure">
                    <img src={homescreenphoneVarbar} className="figure-img img-fluid rounded" alt="Variables section in mobile"/>
                    <figcaption className="figure-caption">On click of variable button, Variables section gets visible. </figcaption>
                    </figure>
                 </div>
                 <div className="col-md-4">
                     <figure className="figure">
                     <img src={homescreenphoneFxBar} className="figure-img img-fluid rounded" alt="Expressions section in mobile"/>
                     <figcaption className="figure-caption">On click of expressions button, Expressions section gets visible.</figcaption>
                    </figure>
                 </div>
                 </div>       
         
         <h4>How to create a new variables</h4>
         
             
             <div className="card m-2">
          <div className="card-header">
          1. Click on the +V button and give a name to your variable.
          </div>
          <div className="card-body">
           <img className="card-img" src={newvarname} alt="click on +v button">
           </img>
          </div>
          <div className="card-footer">
            
          When you will click on save, it will initialize your variable with the value available in 'ANS=' of your calculator pad.
          </div>
         </div>
            
             
             <div className="card m-2">
                 <div className="card-header">
                   2. Your variable is ready to use
                 </div>
          <div className="card-body">
           <img className="card-img" src={myvar1InVarbar} alt="popup for variable name">
           </img>
          </div>
          <div className="card-footer">
          Your variable is added to in the variable bar. You can use it now in active expression or can change the value or delete it.          </div>
         </div>
        
             
             <div className="card m-2">
          <div className="card-header">
                   3. Click on calculator icon <icon className="bi bi-calculator"/> to use it in active expression.
                 </div>
          <div className="card-body">
          For the better understanding I created one variable Angle as I want to calculate value of Sin(Angle) on different values of Angle.<br/>
              So to do that, Write <span className="bg-light">Sin(</span> and click on calculator icon as shown below.
           <img className="card-img" src={usevar} alt="popup for variable name">
           </img>
          </div>
          <div className="card-footer">
          Clicking on calculator icon means you want to use this var in calculator pad active expression. On click of calculator icon it will append the name of that var with active expression text.
          </div>
         </div>
            
         <p>In over case it will become <span className="bg-light">Sin(<span className="text-primary">Angle</span></span>. Blue color here indicates that this is a variable.</p>
         <p>To complete over expression, click on <span className="bg-light">)</span>. Expression is now <span className="bg-light">Sin(<span className="text-primary">Angle</span>)</span>.</p>
         <p>Now change the value of the Angle variable and ANS will change accordingly. </p><br/>
         <br/>
         <h4>How to create new Expressions</h4>
         <p>
             Creating a expression simply mean saving active expression. In last example our active expression was <span className="bg-light">Sin(<span className="text-primary">Angle</span>)</span>.If we want to save this expression with some name, we can by clicking +E button.
         </p>
         <p>
          For more better understanding, we created two new variables radius and height. We want to evalute total volume of cone. 
         </p>
         <p>
             <span className="bg-light px-2">Vol_of_cone=(&#x3C0; x radius<sup>2</sup> x height)/3</span>
         </p>
         <p>As shown below, our current active expression is <span className="bg-light px-2">(&#x3C0; x <span className="text-primary">radius</span><sup>2</sup> x <span className="text-primary">height</span>)/3</span>. To save it in expression bar click on +E.</p>
             
             <div className="card">
          <div className="card-header">
          1. Click on +E button and give a name to your expression.
          </div>
          <div className="card-body">
           <img className="card-img" src={expnamepopup} alt="click on +E button">
           </img>
          </div>
          
         </div>
             <div className="card">
                 <div className="card-header">
                   2. Expression vol_of_cone is added to Expressions.
                 </div>
          <div className="card-body">
           <img className="card-img" src={volofcone} alt="vol_of_cone ">
           </img>
          </div>
          <div className="card-footer">
  Your expression is now added with all the variables. Change the values of radius and height and see the changes in result.
          </div>
         </div>
            <p className="bg-light rounded m-3 p-2">
                Note :- Variables radius and height in our expression vol_of_cone has no relation with variables radius and height which in Variables section. If you want you can delete thos and there will be no impact on our expression we saved in Expressions section. 
            </p>
            <h4>Use your expressions as variable </h4>
            <p> This is the best feature of the express calculator. You can use your expressions as a variable in other expressions. </p>
            <p>To demonstrate this feature, we created two expressions. One from last example and other one is formula of volume of cylinder as vol_of_cylinder.<br/>
            We want to make a new expression <span className="bg-light">my_vol</span> which is nothing but sum of volumns of con and cylinder.
            </p>
            <p>
                <span className="bg-light px-2 rounded">
                    my_vol= vol_of_cone + vol_of_cylinder
                </span>
            </p>
            <p>How calculator icon <span className="bi bi-calculator"></span>works for variable in same way it works for expressions. </p>
            <figure className="figure">
                    <img src={fxinuse} className="figure-img img-fluid rounded" alt="Use expressions as variable"/>
                     <figcaption className="figure-caption">As shown in the figure, click on the calculator icon and it will append the name of that expression with active expression and the result of that expression will be taken as value.</figcaption>
                    </figure>
            <p>Now change the varaiables values in expresions and it will change the result and based on the result ANS will change.</p>
             <h4>Create nested Expressions</h4>
             <p>In above example we created one active expression which uses two expressions. You can store this active expression too.<b/>
             All expressions being used in active expression will be packed as nested expression. 
             </p>
             <p>click on +E button and give a name to your expression. I am giving my_vol for this example. Click on save.And we can see both expressions as nested inside my_vol.</p>
             <figure className="figure">
              <img src={nestedfx} className="figure-img img-fluid rounded" alt="Use expressions as variable"/>
              <figcaption className="figure-caption">As shown in the figure, click on the <span className="bi bi-calculator"></span>and it will append the name of that expression with active expression and result of that expression will be taken as value.  </figcaption>
              </figure>
              <p>Here is a look of an expression with multi levels of inner expressions.
            As you can see in the above figure. my_vol contains both expressions vol_of_cone and vol_of_cylinder with their variables.<br/>
              Change the value of variables and the result of my_vol will change accordingly.
              </p>
              <h4>Multi level Nesting</h4>
              <p>
              We created the expression my_vol which has two inner expressions. If we want to use my_vol inside another expression, we can.<br>
                  </br>
                  Click on the <span className="bi bi-calculator"></span>and use my_vol in active expression. Click on +E and give a name to your new expression.
              </p>
              <figure className="figure">
              <img src={multinestedfx} className="figure-img img-fluid rounded" alt="Use expressions as variable"/>
              <figcaption className="figure-caption">As shown in the figure, Expression my_total_vol has multi-level inner expressions.</figcaption>
              </figure>
              <h4> Summary</h4>
              <p>

              </p>
              <ol>
                  <li>
                  Express Calculator is an online mathematical utility tool that provides functionality to build expressions and variables along with a scientific calculator.                      </li>
                  <li>
                  You can use the calculator just like any other calculator without knowing any other functionality.                      
                  </li>
                  <li>
                  Active Expression: Any calculation which is being processed in the calculator pad called active expression.                  </li>
                  <li>
                  Click on +V will initialize a new variable with the result of the active expression and store it in the Variables section.                       </li>
                  <li>
                  Click on +E to store active expression with variables inside it in the Expressions section.                      </li>
                  <li>
                      Click on the calculator icon <span className="bi bi-calculator"></span> n Variables section or Expressions section will take corresponding variable or expression to active expression.</li>
                  <li>You can create an expression with inner expressions.</li>
              </ol>
            </div>
           </div>
        </div>
        </>
    )
}