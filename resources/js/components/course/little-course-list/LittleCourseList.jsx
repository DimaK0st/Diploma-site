import React from 'react';
import LittleCourse from "../little-course/LittleCourse";

function LittleCourseList(props) {
    const {courseList, active, setActive, courseService} = props

    return (
        courseList?.length ?
            courseList
                ?.map(({title, description, id, owner, subscribe}) =>
                    <LittleCourse
                        title={title}
                        description={description}
                        id={id}
                        key={id}
                        subscribe={subscribe}
                        user={owner}
                        active={active}
                        setActive={setActive}
                        courseService={courseService}
                    />)
            : 'Курсів не знайдено'
    );
}

export default LittleCourseList;
