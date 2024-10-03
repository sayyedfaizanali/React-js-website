import appcode from "../assets/Appjs.png"
import { Link } from "react-router-dom";
function WebQuickStart() {
    return (<>
    <h4><Link to="/learn/learn-react" >Learn React &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>Quick Start</h1>
                <p className="fluid-para"><strong>Welcome to the React documentation! This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.</strong></p>
                <div className="fluid-grey-box">
                    <h4>You will learn</h4>
                    <ul>
                        <li>How to create and nest components</li>
                        <li>How to add markup and styles</li>
                        <li>How to display data</li>
                        <li>How to render conditions and lists</li>
                        <li>How to respond to events and update the screen</li>
                        <li>How to share data between components</li>
                    </ul>
                </div>
                <h3>Creating and nesting components</h3>
                <p className="fluid-para">React apps are made out of components. A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.</p>
                <p className="fluid-para">React components are JavaScript functions that return markup:</p>
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
                <div className="fluid-code-img">
                <img src={appcode} className="appcode" alt="appcode" />
                </div>
            </div>

        </div>

    </>)
}
export default WebQuickStart;