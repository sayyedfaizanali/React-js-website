// import WebSideNav from "./WebSideNav";
import WebSideNavForRefe from "./WebSideNavForRefe";
import { Outlet } from "react-router-dom";
const Reference =()=>{
    return (<>
        <div className="container-fluid learn-react-container">
            <div className="row">
                <div className="col-lg-3 col-md-3">
                    <WebSideNavForRefe />
                </div>
                <div className="col-lg-9 col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
</>)
}
export default Reference;