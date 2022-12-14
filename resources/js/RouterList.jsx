import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Page404 from "./pages/page404/Page404";
import Footer from "./components/footer/Footer";
import Main from "./pages/main/Main";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Schedule from "./pages/schedule/Schedule";
import SearchTest from "./pages/test/SearchTest";

function RouterList(props){
    return <Router >
        <Header/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Schedule />} />


            {/*<Route path="/phone/:number" element={<Home/>}/>*/}
            <Route path="/" element={<SearchTest />} />
            <Route path="/" element={<Main />} />
            {/*<Route path="/" element={<Schedule />} />*/}
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>
    </Router >
}

export default RouterList
