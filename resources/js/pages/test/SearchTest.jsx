import React, {useState} from 'react';
import Modal from "../../components/elements/modal/Modal";
import UpdateTest from "./update/UpdateTest";

function SearchTest(props) {
    const [active, setActive] = useState(true)


    return (
        <div>

        <Modal active={active} setActive={setActive}><UpdateTest/></Modal>

        </div>
    );
}

export default SearchTest;
