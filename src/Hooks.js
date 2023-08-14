
import { Link } from "react-router-dom";
function Hooks(){
    return(<>
   <h4><Link to="/reference/react" >API REFERENCE
 &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>Built-in React Hooks</h1>
                <p className="fluid-para"><strong>Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own. This page lists all built-in Hooks in React.</strong></p>
                <hr></hr>
                
                    <h3>State Hooks</h3>
                
                <p className="fluid-para">State lets a component “remember” information like user input. For example, a form component can use state </p>
                <p className="fluid-para">To add state to a component, use one of these Hooks:</p>
                <ul>
                        <li>useState declares a state variable that you can update directly.</li>
                        <li>useReducer declares a state variable with the update logic inside a reducer function.</li>
                       
                    </ul> 
                <div className="code-content">
                    <div>{"function ImageGallery() {"}</div>
                    <div>&nbsp;&nbsp;{" const [index, setIndex] = useState(0);"}</div> 
                    <div>&nbsp;&nbsp;{"//.."}</div>
                </div>
                <h3>Context Hooks</h3>
                <p className="fluid-para">Context lets a component receive information from distant parents without passing it as props. For example, your app’s top-level component can pass the current UI theme to all components below, no matter how deep.</p>
                <ul>
                        <li>useContext reads and subscribes to a context.</li>
                       
                    </ul> 
                    <div className="code-content">
                    <div>{"function Button() {"}</div>
                    <div>&nbsp;&nbsp;{" const theme = useContext(ThemeContext);"}</div> 
                    <div>&nbsp;&nbsp;{"//.."}</div>
                </div>
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
export default Hooks;