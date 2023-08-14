import { Link } from "react-router-dom";
function ReactCommunity(){
    return(<>
        <h4><Link to="/community" >COMMUNITY &nbsp; {">>"}</Link></h4>
             <div className="container-fluid fluid">
                 <div className="container">
                     <h1>React Community</h1>
                     <p className="fluid-para"><strong>React has a community of millions of developers. On this page we’ve listed some React-related communities that you can be a part of; see the other pages in this section for additional online and in-person learning materials.</strong></p>
                         <h3>Code of Conduct</h3>
                     <p className="fluid-para">Before participating in React’s communities,<a href="https://github.com/facebook/react/blob/main/CODE_OF_CONDUCT.md" target="_blank"> please read our Code of Conduct</a>. We have adopted the <a href="https://www.contributor-covenant.org/">Contributor Covenant</a> and we expect that all community members adhere to the guidelines within.</p>
                     <h3>Stack Overflow</h3>
                     <p className="fluid-para">Stack Overflow is a popular forum to ask code-level questions or if you’re stuck with a specific error. Read through the<a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank"> existing questions </a>. tagged with reactjs or <a href="https://stackoverflow.com/users/login?">ask your own!</a> </p>
                     <h3>Popular Discussion Forums </h3>
                     <p className="fluid-para">There are many online forums which are a great place for discussion about best practices and application architecture as well as the future of React. If you have an answerable code-level question, Stack Overflow is usually a better fit. </p>
                     <p className="fluid-para">Each community consists of many thousands of React users.</p>
                     <ul>
                    <li><a href="https://dev.to/t/react">DEV’s React community</a></li>
                    <li><a href="https://hashnode.com/n/reactjs">Hashnode’s React community</a></li>
                    <li><a href="https://discord.gg/reactiflux">Reactiflux online chat</a></li>
                    <li><a href="https://www.reddit.com/r/reactjs/">Reddit’s React community</a></li>
                         </ul> 
                     
                     <h3>News</h3>
                     <p className="fluid-para">For the latest news about React, <a href="https://twitter.com/reactjs">follow <strong>@reactjs</strong> on Twitter</a> and <a href="https://react.dev/blog">the official React blog</a> on this website.</p>
                   
                     
                 </div>
     
             </div>
         </>)
}
export default ReactCommunity;