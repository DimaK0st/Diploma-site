import React, {useState} from 'react';
import {ADMIN, DEANERY, HEADMEN, STUDENT, TEACHER, USER} from "../CONST";

function RoutesManager(props) {

    const [state, setState] = useState();

    let routes;

    switch (state) {

        case ADMIN:
            routes = <>

            </>
            break;

        case USER:
            routes = <>

            </>
            break;

        case TEACHER:
            routes = <>

            </>
            break;

        case HEADMEN:
            routes = <>

            </>
            break;
    }


    return (
        routes
    );
}

export default RoutesManager;
