import './../css/theme.css';
import hussainprofile from './../images/developer/hussain_profile.jpg';
export function Developer(){
    return(
        <div style={{marginTop:'10vh'}}>
       <div>
        <div className="rounded px-2 font-poppins">
            <div>
          
           <div className="p-2 rounded text-center text-break">
               <h1>
           <span>Hey There,</span><br/>
                    <span>Welcome to the Express-Calculator.</span>
                    </h1>
           <div className="row">
               <div className="col-sm-4">
                   <div className="rounded">
                    <figure className="figure">
                        <img src={hussainprofile} className="figure-img img-fluid rounded"/>
                        <figcaption>
                            <h2>Hussain Ali Bohra</h2>
                            Full Stack Web Developer
                        </figcaption>
                    </figure>
               </div>
               </div>
               <div className="col-sm-7">
                <div style={{textAlign:'justify'}}>
               
                    <h2>I am Hussain Ali Bohra. Developer of Express Calculator.</h2>
                    <div className="social-icons">
                        <h4 className="d-inline-block">Connect me on</h4>
                        <a target="_blank" className="bi bi-linkedin linkedin" href="https://www.linkedin.com/in/hussain-ali-bohra/"></a>
                        <a target="_blank" className="bi bi-github github" href="https://github.com/HussainAliBohra53/"></a>
                    </div>
                    <h5>
                    I am a Full Stack web developer with 2+ Years of experience. I made this project part of my learning. I started by making just a calculator app to learn React. Later I changed my mind to make it more productive. And that turned it into Express-Calculator.
                     <br/>
                       
                    </h5>
                    <h3><u>Open Source</u></h3>
                    <h5>The project is open source under MIT license. You can find the repo at GitHub <a target="_blank" href="https://github.com/HussainAliBohra53/express-calculator">here.</a> </h5>
                    <h5>You are welcome to contribute to the code.</h5>
                    <h5>If you found any issue. Please raise an issue at <a target="_blank" href="https://github.com/HussainAliBohra53/express-calculator/issues" >github issues.</a></h5>
                    <h3>
                        <u> Version </u><sup>Beta</sup>
                    </h3>
                    <h5>Project is currently not very stable as changes are being made continuesly. So it's currently in beta version. 
                       Stable version will be released soon.
                    </h5>
                     <h3><u>Technologies Used</u>:</h3>
                     <h5>
                     <ul>
                         <li>React.js</li>
                         <li>Math.js</li>
                         <li>JavaScript</li>
                         <li>TypeScript</li>
                         <li>HTML5 LocalStorage API</li>
                         <li>HTML</li>
                         <li>CSS</li>
                         <li>Bootstrap</li>
                     </ul>
                     Special thanks to Math.js for being open source. Math.js is used for expression evaluation.
                     </h5>
                     <h3>Storage</h3>
                     <h5>
                         Express - Calculator uses LocalStorage API to store data. Whenever you change anywhere, it formats the data into JSON and save in localstorage.
                         <br/>
                         In future release we will integrate with cloud so formulas or expressions can be shared and also u can get your data across your all devices.
                     </h5>

                     
                </div>
               </div>
           </div>
           </div>
           <footer className="footer">
                         
           </footer>
           </div>
        </div>
        </div> 
        </div>
    )
}