
import { Link } from "react-router-dom";

function WebSideNavForRefe() {
    return (<>
        <div className="accordion side-nav" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                   <span>react@18.2</span>
                    <Link to="/reference/react" >
                        <button type="button" className="accordion-button side-nav-item" data-bs-toggle="collapse"
                             aria-expanded="true" aria-controls="collapseOne">Hooks </button>
                    </Link>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <Link className="sidenav-subitem" to="/reference/react/useCallback" ><div>useCallback</div></Link>
                    <Link to="/reference/react/useContext" className="sidenav-subitem" ><div>useContext</div></Link>
                </div>
            </div>
           
        </div>
    </>)
}
export default WebSideNavForRefe;