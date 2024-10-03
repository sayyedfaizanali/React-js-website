
import { Link } from "react-router-dom";

function Conferences() {
    return (<>

        <h4><Link to="/community" >COMMUNITY &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>React Conferences</h1>
                <p className="fluid-para"><strong>Do you know of a local React.js conference? Add it here! (Please keep the list chronological)</strong></p>
                <h2>Upcoming Conferences </h2>
                <div>
                <h3>React Norway 2023</h3>
                <p className="fluid-para">June 16th, 2023. Larvik, Norway</p>
                <p className="fluid-para"><a href="https://reactnorway.com/" target="_blank">Website</a>-<a href="https://twitter.com/ReactNorway/"  target="_blank">Twitter</a>-<a href="https://www.facebook.com/reactdaynorway/" target="_blank">Facebook</a></p>
                </div>
               <div>
               <h3>ReactNext 2023 </h3>
                <p className="fluid-para">June 27th, 2023. Tel Aviv, Israel</p>
                <p className="fluid-para"><a href="https://reactnorway.com/" target="_blank">Website</a>-<a href="https://twitter.com/ReactNorway/"  target="_blank">Twitter</a>-<a href="https://www.facebook.com/reactdaynorway/" target="_blank">Facebook</a></p>
               </div>
               <div>
               <h3>React Nexus 2023 </h3>
                <p className="fluid-para">July 07 & 08, 2023. Bangalore, India (In-person event)</p>
                <p className="fluid-para"><a href="https://reactnorway.com/" target="_blank">Website</a>-<a href="https://twitter.com/ReactNorway/"  target="_blank">Twitter</a>-<a href="https://www.facebook.com/reactdaynorway/" target="_blank">Facebook</a></p>
               </div>
               <div>
               <h3>React Rally 2023</h3>
                <p className="fluid-para">August 17 & 18, 2023. Salt Lake City, UT, USA</p>
                <p className="fluid-para"><a href="https://reactnorway.com/" target="_blank">Website</a>-<a href="https://twitter.com/ReactNorway/"  target="_blank">Twitter</a>-<a href="https://www.facebook.com/reactdaynorway/" target="_blank">Facebook</a></p>
               </div>
               <div>
               <h3>React India 2023 </h3>
                <p className="fluid-para">Oct 5 - 7, 2023. In-person in Goa, India (hybrid event) + Oct 3 2023 - remote day</p>
                <p className="fluid-para"><a href="https://reactnorway.com/" target="_blank">Website</a>-<a href="https://twitter.com/ReactNorway/"  target="_blank">Twitter</a>-<a href="https://www.facebook.com/reactdaynorway/" target="_blank">Facebook</a></p>
               </div>
                
            </div>
        </div>

    </>)
}
export default Conferences;