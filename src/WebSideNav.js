
import { Link } from "react-router-dom";

function WebSideNav() {
    return (<>
        <div className="accordion side-nav" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                   <span>Get Started</span>
                    <Link to="/learn" >
                        <button type="button" className="accordion-button side-nav-item" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Quick Start </button>
                    </Link>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <Link className="sidenav-subitem" to="/learn/tutorial-tic-tac-toe" ><div>Tutorial: Tic-Toc-Toe</div></Link>
                    <Link to="/learn/thinking-in-react" className="sidenav-subitem" ><div>Thinking in React</div></Link>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <Link to="/learn/installation" >
                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Installation</button></Link>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <Link className="sidenav-subitem" to="/learn/start-a-new-react-project" ><div>Start a New React Project</div></Link>
                    <Link to="/learn/add-react-to-an-existing-project" className="sidenav-subitem" ><div>Add React to an Existing Project</div></Link>
                </div>
            </div>
         <hr></hr>
         <div className="accordion-item">
                <h2 className="accordion-header">
                    <Link to="/learn/describing-the-ui" >
                        <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Describing the UI</button></Link>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <Link className="sidenav-subitem" to="/learn/describing-the-ui" ><div>Your First Component</div></Link>
                    <Link to="/learn/describing-the-ui" className="sidenav-subitem" ><div>Importing and Exporting component</div></Link>
                </div>
            </div>
        </div>
    </>)
}
export default WebSideNav;