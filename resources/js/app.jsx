import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterList from "./RouterList";
import('./bootstrap');
import '../sass/reset.scss'
import '../sass/app.scss'
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Helmet>
            <title>Головна - EducationalSite</title>
            <meta name="description" content="Безкоштовний сайт за допомогою якого можна виконувати дистанційне навчання у будь-якій точці світу та для будь-якої людини." />
        </Helmet>
        <RouterList/>
    </>
);

