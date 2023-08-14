import { Link } from "react-router-dom";
function MeetUps(){
    return(<>
     <h4><Link to="/community" >COMMUNITY &nbsp; {">>"}</Link></h4>
        <div className="container-fluid fluid">
            <div className="container">
                <h1>React Meetups</h1>
                <p className="fluid-para"><strong>Do you have a local React.js meetup? Add it here! (Please keep the list alphabetical)</strong></p>
                <div>
                <h3>Albania </h3>
                <ul>
                    <li><a href="https://www.meetup.com/React-User-Group-Albania/">Tirana</a></li>
                </ul>
                </div>
                <div>
                <h3>Argentina  </h3>
                <ul>
                    <li><a href="https://www.meetup.com/es/React-en-Buenos-Aires">Buenos Aires</a></li>
                    <li><a href="https://www.meetup.com/es/reactrosario">Rosario</a></li>
                </ul>
                </div>
                <div>
                <h3>Australia   </h3>
                <ul>
                    <li><a href="https://www.meetup.com/reactbris/">Brisbane</a></li>
                    <li><a href="https://www.meetup.com/React-Melbourne/">Melbourne</a></li>
                    <li><a href="https://www.meetup.com/React-Sydney/">Sydney</a></li>
                </ul>
                </div>
                
                
            </div>
        </div>
    </>)
}
export default MeetUps;