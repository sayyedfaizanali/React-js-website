import install1 from "../assets/install.png"
import { Link } from "react-router-dom";
function Installation(){
    return(<>
         <h4><Link to="/learn/learn-react" >Learn React &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>Installation</h1>
                <p className="fluid-para"><strong>React has been designed from the start for gradual adoption. You can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to an HTML page, or start a complex React-powered app, this section will help you get started.</strong></p>
                <div className="fluid-grey-box">
                    <h4>In this chapter</h4>
                    <ul>
                        <li><Link to="/learn/start-a-new-react-project">How to start a new React project</Link></li>
                        <li><Link to="/learn/add-react-to-an-existing-project">How to add React to an existing project</Link></li>
                        <li>How to set up your editor</li>
                        <li>How to install React Developer Tools</li>
                       
                    </ul>
                </div>
                <h3>Try React</h3>
               
                <div className="fluid-code-img">
                <img src={install1} className="install1" alt="install1" />
                </div>
                <p className="fluid-para">You can edit it directly or open it in a new tab by pressing the “Fork” button in the upper right corner.</p>
                <p className="fluid-para">Most pages in the React documentation contain sandboxes like this. Outside of the React documentation, there are many online sandboxes that support React: for example, CodeSandbox, StackBlitz, or CodePen.</p>
                <h3>Try React locally </h3>
                <p className="fluid-para">To try React locally on your computer, download this HTML page. Open it in your editor and in your browser!</p>
                <h3>Start a new React project </h3>
                <p className="fluid-para">If you want to build an app or a website fully with React, <Link to="/learn/start-a-new-react-project">start a new React project</Link>.</p>
                <h3>Add React to an existing project </h3>
                <p className="fluid-para">If want to try using React in your existing app or a website, <Link to="/learn/add-react-to-an-existing-project"></Link>add React to an existing project.</p>
                <h3>Add React to an existing project </h3>
                <p className="fluid-para">Head to the <Link to="/learn">Quick Start</Link> guide for a tour of the most important React concepts you will encounter every day.</p>
            </div>

        </div>

        </>)
    }
export default Installation;