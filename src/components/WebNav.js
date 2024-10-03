import reactlog from '../assets/icons8-react-80.png';
import { Link, Outlet } from "react-router-dom";
function WebNav() {
  return (<>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand col-sm-1 col-md-1 col-lg-1" to="/"><div> <img src={reactlog} className="reactLogo" alt="video" /> </div></Link>
      <form className="form-inline my-2 my-lg-0 col-sm-0 col-md-7 col-lg-7">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" />
      </form>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/learn">Learn</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reference">Reference</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/community">Community</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </ul>

      </div>
    </nav>
    <Outlet />
  </>)
}
export default WebNav;