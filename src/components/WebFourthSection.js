import carouselimg2 from '../assets/Carouselimage2.png';
function WebFourthSection(){
    return (<>
        <div className="container-fluid fluid-section pt-5 pb-5">
            <div className="container pt-5">
                <div className="container-content">
                    <h2 className="col-lg-6 m-auto pb-4">Go full-stack
with a framework</h2>
                    <p className="col-lg-8 m-auto pb-5">React is a library. It lets you put components together, but it doesn’t prescribe how to do routing and data fetching. To build an entire app with React, we recommend a full-stack React framework like Next.js or Remix.</p>
                </div>

            </div>
            <div className="container-fluid container-content-block row ">
                <div className="container-content-block-left col-sm-12 col-md-12 col-lg-6 ">
                    <div className="block-left-title">
                        <span><strong>SearchableVideoList.js</strong></span>
                    </div>
                    <div className="block-left-code">
                        <div>{"import { useState } from 'react';"}</div>
                        <div>&nbsp;&nbsp;&nbsp;{"function SearchableVideoList({ videos }) {"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"const [searchText, setSearchText] = useState('');"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"const foundVideos = filterVideos(videos, searchText);"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"return ("}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<>"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<SearchInput"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"value={searchText}"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" onChange={newText => setSearchText(newText)} />"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<VideoList"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" videos={foundVideos}"}</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" mptyHeading={`No matches for “${searchText}”`} />"}</div>
                        <div>&nbsp;&nbsp;&nbsp;{"</>"}</div>
                        <div>&nbsp;&nbsp;&nbsp;{");"}</div>
                        <div>{"}"}</div>
                    </div>
                </div>
                <div className="container-content-block-right col-sm-12  col-md-12 col-lg-6">
                    <div> <img src={carouselimg2} className="carouselimg" alt="video" /> </div>
                </div>
            </div>
            <p className="col-lg-8 m-auto pb-5 section-para">React is also an architecture. Frameworks that implement it let you fetch data in asynchronous components that run on the server or even during the build. Read data from a file or a database, and pass it down to your interactive components.</p>
            <a type="button" className="btn btn-light light-btn col-xs-3">{"</>"}Get started with a framework{" "}<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg></a>
        </div>
    </>)
}
export default WebFourthSection;