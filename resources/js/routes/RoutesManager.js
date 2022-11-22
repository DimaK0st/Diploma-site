import React, {useState} from 'react';
import {ADMIN, DEANERY, STUDENT, TEACHER} from "../CONST";

function RoutesManager(props) {

    const [state, setState] = useState();

    let routes;

    switch (state) {

        case ADMIN:
            routes = <>

            </>
            break;

        case STUDENT:
            routes = <>

            </>
            break;

        case TEACHER:
            routes = <>

            </>
            break;

        case DEANERY:
            routes = <>

            </>
            break;
    }


    return (
        routes
    );
}

export default RoutesManager;
