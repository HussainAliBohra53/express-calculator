import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AppV2 } from '../App';
import { ExpProvider } from '../Components/MainContext';
import '../css/home.css';
import { Developer } from './Developer';
export function HeadingName(){
    return (
        <div className='heading-name-wrapper p-2'>
        <div className='d-flex justify-content-center'>
         <div>
         <h1 className='display-1 shift-right text-center'>
             <icon className='bi-lightning-charge-fill text-wrap animate-charcter'></icon>
             <span className='express'>Express </span> 
             <span className='calculator'>Calculator</span>
         </h1>
         <h2 className='display-6 text-center'>
             <span className='caption'> Let's get it Solved!</span>
         </h2>
         </div>
         </div>
        </div>

    )
}
export function QuickLinks(){
    return (
<div className='features-box'>
        <div>
            <ul className='list-unstyled'>
            <li>
                <Link to='/express-calculator'>Express-calculator</Link>
            </li>
            <li>
                <Link to="/how-to-use">Docs</Link>
            </li>
            <li>
                <Link to="/developer">Developer</Link>
            </li>
            <li>
                <a target='_blank' href='https://github.com/HussainAliBohra53/express-calculator'>Github Repository</a>
            </li>

            </ul>
        </div>
    </div>
    )
}
export function Features(){
    return(
        <div className='container-fluid'>
            <div className='row features'>
                <div className='col-sm-4'>
                    <div className='features-item p-2 shadow-sm mb-4'>
                        <h3 className='animate-charcter'>
                            Expression Builder
                        </h3>
                        <p> 
                        Express calculator helps you to construct your expression by inserting variables, numbers, and mathematical operators.
You can also nest an expression inside another. Nesting of expression helps you to make big and complex expressions from small and simple expressions. 
                        </p>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='features-item p-2 shadow-sm mb-4'>
                        <h2 className='animate-charcter'>
                            Declare Variables
                        </h2>
                        <p>
                        Variables are alphabets that represent a value. In express calculator, you can easily create a variable and use it wherever you want to use it's value. Change the value of a variable and it will change the value wherever it's being used immediately.                         </p>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='features-item p-2 shadow-sm mb-4'>
                        <h2 className='animate-charcter'>
                            Calculate on change
                        </h2>
                        <p>
                        No need to hit enter or to press '=' after every change. Whether you are changing the value of variables or expressions or just numbers on the calculator pad, Express calculator recalculates, and update everything after every change.                        </p>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='features-item p-2 shadow-sm mb-4'>
                        <h2 className='animate-charcter'>
                            Easy to Use UI
                        </h2>
                        <p>
                        UI is divided into three sections: calculator, variable bar and expression bar make things very clear, simple, and easy to use. Expression bar shows expressions in collapse mode and you can expand or collapse every layer at your convenience. Also, UI is responsive and works awesome on mobile devices too.                         </p>
                    </div>
                </div>
                <div className='col-sm-4'>
                    <div className='features-item p-2 shadow-sm mb-4'>
                        <h2 className='animate-charcter'>
                            Storing Locally
                        </h2>
                        <p>
                        Express calculator uses HTML storage API to store the data in the browser's memory. It store the data after every change automatically so no need to worry on tab closed accidentally. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Home(){
   
    return (
    
    <div style={{marginTop:'10vh'}} className=''>
        <div className='container'>
        <HeadingName/>
        {/*}
       <div className='d-flex justify-content-center'>
       <div className='mt-3 shadow-sm p-2 btn'>
                <Link className='display-3 no-style-input'  to="/">Let's go IN</Link>
                </div>
    </div>{*/}
<div className='sliding-text-body'>

</div>
<h1 className='display-3'>Features</h1>
<Features/>
<h1 className='display-5'>Quick Links</h1>   
<QuickLinks/>
    </div>
    </div>
)} 