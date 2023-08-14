import appcode from "./Appjs.png"
import { Link } from "react-router-dom";
function TutorialTic(){
    return(<>
    <h4><Link to="/learn/learn-react" >Learn React &nbsp; {">>"} &nbsp;</Link>
    <Link to="/learn/tutorial-tic-tac-toe" >Quick Start &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>Tutorial: Tic-Tac-Toe</h1>
                <p className="fluid-para"><strong>You will build a small tic-tac-toe game during this tutorial. This tutorial does not assume any existing React knowledge. The techniques you’ll learn in the tutorial are fundamental to building any React app, and fully understanding it will give you a deep understanding of React.</strong></p>
                <div className="fluid-grey-box">
                    <h4>Note</h4>
                    <p className="fluid-para">This tutorial is designed for people who prefer to learn by doing and want to quickly try making something tangible. If you prefer learning each concept step by step, start with Describing the UI.</p>
                </div>
                <div className="fluid-list">
                    <p>The tutorial is divided into several sections:</p>
                    <ul>
                        <li>Setup for the tutorial will give you a starting point to follow the tutorial.</li>
                        <li>Overview will teach you the fundamentals of React: components, props, and state.</li>
                        <li>Completing the game will teach you the most common techniques in React development.</li>
                        <li>Adding time travel will give you a deeper insight into the unique strengths of React.</li>
                    </ul>
                </div>
                <h3>What are you building?</h3>
                <p className="fluid-para">In this tutorial, you’ll build an interactive tic-tac-toe game with React.</p>
                <p className="fluid-para">You can see what it will look like when you’re finished here:</p>
                <div className="fluid-code-img">
                <img src={appcode} className="appcode" alt="appcode" />
                </div>
                <p className="fluid-para">If the code doesn’t make sense to you yet, or if you are unfamiliar with the code’s syntax, don’t worry! The goal of this tutorial is to help you understand React and its syntax.</p>
                <p className="fluid-para">We recommend that you check out the tic-tac-toe game above before continuing with the tutorial. One of the features that you’ll notice is that there is a numbered list to the right of the game’s board. This list gives you a history of all of the moves that have occurred in the game, and it is updated as the game progresses.</p>
                <p className="fluid-para">Once you’ve played around with the finished tic-tac-toe game, keep scrolling. You’ll start with a simpler template in this tutorial. Our next step is to set you up so that you can start building the game.</p>
                <h3>Setup for the tutorial</h3>
                <p className="fluid-para">In the live code editor below, click Fork in the top-right corner to open the editor in a new tab using the website CodeSandbox. CodeSandbox lets you write code in your browser and preview how your users will see the app you’ve created. The new tab should display an empty square and the starter code for this tutorial.</p>
                <div className="fluid-code-img">
                <img src={appcode} className="appcode" alt="appcode" />
                </div>
                <div className="code-content">
                    <div>{"function MyButton() {"}</div>
                    <div>&nbsp;&nbsp;{"return ("}</div>
                    <div>&nbsp;&nbsp;&nbsp;{"<button>I'm a button</button>"}</div>
                    <div>&nbsp;&nbsp;{" );"}</div>
                    <div>{"}"}</div>
                </div>
                <p className="fluid-para">Now that you’ve declared<span>MyButton</span>, you can nest it into another component:</p>
                <div className="code-content">
                    <div>{"export default function MyApp() {"}</div>
                    <div>&nbsp;&nbsp;{"return ("}</div>
                    <div>&nbsp;&nbsp;&nbsp;{"<div>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<h1>Welcome to my app</h1>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<MyButton />"}</div>
                    <div>&nbsp;&nbsp;&nbsp;{"</div>"}</div>
                    <div>&nbsp;&nbsp;{" );"}</div>
                    <div>{"}"}</div>
                </div>
                <p className="fluid-para">Notice that<span>{"<MyButton />"}</span>  starts with a capital letter. That’s how you know it’s a React component. React component names must always start with a capital letter, while HTML tags must be lowercase.</p>
                <p className="fluid-para">Have a look at the result:</p>
                
            </div>

        </div>


    </>)
}
export default TutorialTic;