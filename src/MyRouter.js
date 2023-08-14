import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Learn from './Learn';
import Reference from './Reference';
import Community from './Community';
import Blog from './Blog';
import WebPage from './WebPage';
import WebNav from './WebNav';
import WebQuickStart from './WebQuickStart';
import Installation from './Installation';
import TutorialTic from './TutorialTic';
import ThinkingReact from './ThinkingReact';
import StartNewReact from './StartNewReact';
import ExistingProject from './ExistingProject';
import Describing from './Describing';
import Hooks from './Hooks';
import UseCallBack from './UseCallBack';
import UseContext from './UseContext';
import ReactCommunity from './ReactCommunity';
import Conferences from './Conferences';
import MeetUps from './MeetUps';
export default function MyRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WebNav />}>
                    <Route index element={<WebPage />} />
                    <Route path='learn' element={<Learn />} >
                        <Route index element={<WebQuickStart />} />
                        <Route path='installation' element={<Installation />} />
                        <Route path='learn-react' element={<WebQuickStart />} />
                        <Route path='tutorial-tic-tac-toe' element={<TutorialTic />} />
                        <Route path='thinking-in-react' element={<ThinkingReact />} />
                        <Route path='start-a-new-react-project' element={<StartNewReact />} />
                        <Route path='add-react-to-an-existing-project' element={<ExistingProject />} />
                        <Route path='describing-the-ui' element={<Describing />} />
                    </Route>
                    <Route path="reference" element={<Reference />} >
                        <Route index element={<Hooks />} />
                        <Route path='react' element={<Hooks />} /> 
                        <Route path='react/useCallback' element={<UseCallBack />} />
                        <Route path='react/useContext' element={<UseContext />} />
                    </Route>
                    <Route path="community" element={<Community />} >
                    <Route index element={<ReactCommunity />} />
                    <Route path='conferences' element={<Conferences />} /> 
                    <Route path='meetups' element={<MeetUps />} /> 
                    </Route>
                    <Route path="blog" element={<Blog />} />
                </Route>
            </Routes>
        </BrowserRouter>)
}