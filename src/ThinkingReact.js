import fruitsimg from "./fruitsandvegetables.png"
import { Link } from "react-router-dom";
function ThinkingReact(){
    return(<>
    <h4><Link to="/learn/learn-react" >Learn React &nbsp; {">>"} &nbsp;</Link>
    <Link to="/learn/tutorial-tic-tac-toe" >Quick Start &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>Thinking in React</h1>
                <p className="fluid-para"><strong>React can change how you think about the designs you look at and the apps you build. When you build a user interface with React, you will first break it apart into pieces called components. Then, you will describe the different visual states for each of your components. Finally, you will connect your components together so that the data flows through them. In this tutorial, we’ll guide you through the thought process of building a searchable product data table with React.</strong></p>
               
                <h3>Start with the mockup</h3>
                <p className="fluid-para">Imagine that you already have a JSON API and a mockup from a designer.</p>
                <p className="fluid-para">The JSON API returns some data that looks like this:</p>
                <div className="code-content">
                    <div>{"["}</div>
                    <div>&nbsp;{" { category: {fruid}, price: {$1}, stocked: true, name: {Apple} },"}</div>
                    <div>&nbsp;{"{ { category: {fruid}, price: {$1}, stocked: true, name: {Dragonfruit} },"}</div>
                    <div>&nbsp;{"{ { category: {fruid}, price: {$2}, stocked: false, name: {Passionfruit} },"}</div>
                    <div>&nbsp;{"{ { category: {vegetables}, price: {$2}, stocked: true, name: {Spinach} },"}</div>
                    <div>&nbsp;{"{ { category: {vegetables}, price: {$4}, stocked: false, name: {Pumpkin} },"}</div>
                    <div>&nbsp;{"{ { category: {vegetables}, price: {$1}, stocked: true, name: {pease} },"}</div>
                    <div>{"]"}</div>
                </div>
                <p className="fluid-para">The mockup looks like this:</p>
                <div className="fluid-code-img">
                <img src={fruitsimg} className="fruitsimg" alt="fruitsimg" />
                </div>
                <p className="fluid-para">To implement a UI in React, you will usually follow the same five steps.</p>
                <h3>Step 1: Break the UI into a component hierarchy </h3>
                <p className="fluid-para">Start by drawing boxes around every component and subcomponent in the mockup and naming them. If you work with a designer, they may have already named these components in their design tool. Ask them!</p>
                <p className="fluid-para">Depending on your background, you can think about splitting up a design into components in different ways:</p>
                <ul>
                        <li><strong>Programming—use</strong> the same techniques for deciding if you should create a new function or object. One such technique is the single responsibility principle, that is, a component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.</li>
                        <li><strong>CSS—</strong>consider what you would make class selectors for. (However, components are a bit less granular.)</li>
                        <li><strong>Design—</strong>consider how you would organize the design’s layers.</li>
                        
                    </ul>
                <p className="fluid-para">If your JSON is well-structured, you’ll often find that it naturally maps to the component structure of your UI. That’s because UI and data models often have the same information architecture—that is, the same shape. Separate your UI into components, where each component matches one piece of your data model.</p>
               
                <p className="fluid-para">There are five components on this screen:</p>
                <p className="fluid-para">Have a look at the result:</p>
                <div className="fluid-code-img">
                <img src={fruitsimg} className="fruitsimg" alt="fruitsimg" />
                </div>
                
            </div>

        </div>
    </>)
}
export default ThinkingReact;