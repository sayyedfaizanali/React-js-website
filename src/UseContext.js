
import { Link } from "react-router-dom";
import linksimg from './usecontext.png'
function UseContext() {
    return (<>

        <h4><Link to="/reference/react" >API REFERENCE &nbsp; {">>"}</Link> <Link to="/reference/react" >Hooks &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>useContext</h1>
                <p className="fluid-para"><span>useContext</span> <strong>is a React Hook that lets you read and subscribe to context from your component.</strong></p>
                <div className="code-content">
                    <div>{"const value = useContext(SomeContext)"}</div>
                </div>
                <hr></hr>
                <div className="fluid-code-img">
                    <img src={linksimg} className="links" alt="links" />
                </div>
                <h3>Reference</h3>
                <p className="fluid-para"><span>useContext(SomeContext)</span></p>
                <p className="fluid-para">Call <span>useContext</span> at the top level of your component to read and subscribe to context.</p>

                <div className="code-content">
                    <div>{"import { useContext } from 'react';"}</div>
                    <div>{"function MyComponent() {"}</div>
                    <div>&nbsp;&nbsp;{"const theme = useContext(ThemeContext);"}</div>
                    <div>&nbsp;&nbsp;{"//..."}</div>
                </div>
                <h3><Link to="/reference">See more examples below.</Link></h3>
                <h3>Context Hooks</h3>
                <p className="fluid-para">Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.</p>
                <ul>
                    <li>useContext reads and subscribes to a context.</li>

                </ul>

                <h3>Ref Hooks</h3>
                <p className="fluid-para">Refs let a component hold some information that isn’t used for rendering, like a DOM node or a timeout ID. Unlike with state, updating a ref does not re-render your component. Refs are an “escape hatch” from the React paradigm. They are useful when you need to work with non-React systems, such as the built-in browser APIs.</p>
                <ul>
                    <li>useRef declares a ref. You can hold any value in it, but most often it’s used to hold a DOM node.</li>
                    <li>useImperativeHandle lets you customize the ref exposed by your component. This is rarely used.</li>

                </ul>
                <div className="code-content">
                    <div>{"function Form() {"}</div>
                    <div>&nbsp;&nbsp;{" const inputRef = useRef(null);"}</div>
                    <div>&nbsp;&nbsp;{"//.."}</div>
                </div>

            </div>

        </div>

    </>)
}
export default UseContext;