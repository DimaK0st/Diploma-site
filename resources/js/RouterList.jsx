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
import FindCourse from "./components/course/find-course/FindCourse";
import ShowCourse from "./components/course/show-course/ShowCourse";
import Questions from "./components/questions/Questions";
import CreateQuestion from "./components/questions/create/CreateQuestion";

function RouterList(props){
    return <Router >
        <Header/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<Main><Schedule /></Main>} />
            <Route path="/course" element={<Main><FindCourse my={false}/></Main>}/>
            <Route path="/course/:courseId" element={<Main><ShowCourse/></Main>}/>



            <Route path="/question/create" element={<Main><CreateQuestion/></Main>}/>
            <Route path="/question" element={<Main><Questions/></Main>}/>
            {/*<Route path="/" element={<Main />} />*/}
            {/*<Route path="/phone/:number" element={<Home/>}/>*/}
            <Route path="/" element={<SearchTest />} />
            {/*<Route path="/" element={<Schedule />} />*/}
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>
    </Router >
}

export default RouterList
