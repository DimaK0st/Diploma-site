import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Page404 from "./pages/page404/Page404";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";

function RouterList(props){
    return <Router >
        <Header/>
        <Routes>
            {/*<Route path="/phone/:number" element={<Home/>}/>*/}
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>
    </Router >
}

export default RouterList
