import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterList from "./RouterList";
import('./bootstrap');
import '../sass/reset.scss'
import '../sass/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <RouterList/>
    </>
);

