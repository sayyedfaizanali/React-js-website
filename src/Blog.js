import { Link } from "react-router-dom";

const Blog =()=>{
    return (<>
        <div className="container-fluid">
            <div className="container blog-container pt-5">       
            <div className="container-fluid fluid">
            <div className="container">
                <div className="container-top-content">
                <h4><Link to="/blog" >Blog &nbsp; {">>"} &nbsp;</Link></h4>
                <h1>React Blog</h1>
                <p className="fluid-para"><strong>This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the<a href="https://twitter.com/reactjs">@reactjs </a> account on Twitter, but you won’t miss anything essential if you only read this blog.</strong></p>
                </div>
            
                <a className="box-anchor"href="https://react.dev/blog/2023/05/03/react-canaries" target="_blank"><div className="fluid-grey-box">
                    <h4><a href="https://react.dev/blog/2023/05/03/react-canaries"  target="_blank" >React Canaries: Incremental Feature Rollout Outside Meta</a></h4>
                    <span>May 3, 2023</span>
                    <p className="fluid-para">Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final—similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.</p>
                    <a className="readmore-link" href="https://react.dev/blog/2023/05/03/react-canaries">Read More</a>
                </div> 
                
                </a>  
            </div>

        </div>
            </div>
            
        </div>
</>)
}
export default Blog;