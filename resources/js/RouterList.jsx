import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Page404 from "./pages/page404/Page404";
import Footer from "./components/footer/Footer";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Schedule from "./pages/schedule/Schedule";
import SearchTest from "./pages/test/SearchTest";
import FindCourse from "./components/course/find-course/FindCourse";
import ShowCourse from "./components/course/show-course/ShowCourse";
import Questions from "./components/questions/Questions";
import CreateQuestion from "./components/questions/create/CreateQuestion";
import UpdateTest from "./pages/test/update/UpdateTest";
import CreateTest from "./pages/test/create/CreateTest";
import IndexTest from "./pages/test/index/IndexTest";
import RequireAuth from "./hoc/RequireAuth";
import Main from "./pages/main/Main";

function RouterList(props){
    return <Router >
        <Header/>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/schedule" element={<RequireAuth><Schedule /></RequireAuth>} />
            <Route path="/course" element={<RequireAuth><FindCourse my={false}/></RequireAuth>}/>
            <Route path="/course/my" element={<RequireAuth><FindCourse my={true}/></RequireAuth>}/>
            <Route path="/course/:courseId" element={<RequireAuth><ShowCourse/></RequireAuth>}/>

            <Route path="/test/create" element={<RequireAuth><CreateTest/></RequireAuth>}/>
            <Route path="/test/update" element={<RequireAuth><UpdateTest/></RequireAuth>}/>

            <Route path="/test/edit/:testId" element={<RequireAuth><IndexTest/></RequireAuth>}/>
            <Route path="/test/:testId" element={<RequireAuth><Questions/></RequireAuth>}/>


            <Route path="/question/create" element={<RequireAuth><CreateQuestion/></RequireAuth>}/>
            <Route path="/question" element={<RequireAuth><Questions/></RequireAuth>}/>
            <Route path="/" element={<Main><FindCourse my={false}/></Main>} />
            <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer/>
    </Router >
}

export default RouterList
