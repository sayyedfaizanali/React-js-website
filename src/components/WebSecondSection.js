import videoimg from '../assets/myvideo.png';
function WebSecondFunction() {
    return (<>
        <div className="container-fluid fluid-section pt-5 pb-5">
            <div className="container pt-5">
                <div className="container-content">
                    <h2 className="col-lg-6 m-auto pb-4">Create user interfaces from components</h2>
                    <p className="col-lg-8 m-auto pb-5">React lets you build user interfaces out of individual pieces called components. Create your own React components like <span>Thumbnail</span>, <span>LikeButton</span>, and <span>Video</span>. Then combine them into entire screens, pages, and apps.</p>
                </div>

            </div>
            <div className="container-fluid container-content-block row ">
            <div className="container-content-block-left col-sm-12 col-md-12 col-lg-6 ">
                <div className="block-left-title">
                    <span><strong>Video.js</strong></span>
                </div>
                <div className="block-left-code">
                    <div>{"function Video({ video }) {"}</div>
                    <div>&nbsp;&nbsp;&nbsp;{"return ("}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<div>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<Thumbnail video={video} />"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" <a href={video.url}>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<h3>{video.title}</h3>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<p>{video.description}</p>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" </a>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<LikeButton video={video} />"}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" </div>"}</div>
                    <div>&nbsp;&nbsp;&nbsp;{");"}</div>
                    <div>{"}"}</div>
                </div>
            </div>
            <div className="container-content-block-right col-sm-12  col-md-12 col-lg-6">
            <div> <img src={videoimg} className="videoimage" alt="video" /> </div>
            </div>
        </div>
        <p className="col-lg-8 m-auto pb-5 section-para">Whether you work on your own or with thousands of other developers, using React feels the same. It is designed to let you seamlessly combine components written by independent people, teams, and organizations.</p>
        </div>
    </>)
}
export default WebSecondFunction;