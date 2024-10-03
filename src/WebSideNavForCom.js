
import { Link } from "react-router-dom";

function WebSideNavForCom() {
    return (<>
        <div className="accordion side-nav" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                   <span>GET INVOLVED</span>
                    <Link to="/community" >
                        <button type="button" className="accordion-button side-nav-item" data-bs-toggle="collapse"
                             aria-expanded="true" aria-controls="collapseOne">Community </button>
                    </Link>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <Link className="sidenav-subitem" to="/community/conferences" ><div>React Conferences</div></Link>
                    <Link to="/community/meetups" className="sidenav-subitem" ><div>React Meetups</div></Link>
                </div>
            </div>
           
        </div>
    </>)
}
export default WebSideNavForCom;