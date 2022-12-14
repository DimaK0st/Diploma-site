import React, {useState} from 'react';
import Modal from "../../components/elements/modal/Modal";
import CreateTest from "./create/CreateTest";

function SearchTest(props) {
    const [active, setActive] = useState(true)


    return (
        <div>

<Modal active={active} setActive={setActive}><CreateTest/></Modal>

        </div>
    );
}

export default SearchTest;
