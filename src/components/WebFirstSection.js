import logo from '../assets/logo.svg';
function WebFirstSection() {
    return (<>
        <div className="container-fluid first-section mt-5 mb-5">
            <div className="container ">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React</h2>
                <h3>The library for web and native user interfaces</h3>
                <div className="container-btn col-xs-12 col-md-12 col-lg-12 mt-4">
                    <a type="button" className="btn btn-primary blue-btn col-xs-3">Learn React</a>
                    <a type="button" className="btn btn-light light-btn col-xs-3">API Reference</a>
                </div>
            </div>
        </div>
    </>)
}
export default WebFirstSection;