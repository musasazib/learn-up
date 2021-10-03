import React from 'react';
import './HomeCourse.css';

const HomeCourse = (props) => {
    const { name, picture, courses } = props.homeCourse;
    return (
        <div>
            <div className="home-course-container">
                <img className="course-img" src={picture} alt="" />
                <h4>{name}</h4>
                <h6>{courses} Courses</h6>
            </div>
        </div>
    );
};

export default HomeCourse;