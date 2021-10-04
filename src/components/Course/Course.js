import React from 'react';
import './Course.css';

const Course = (props) => {
    const { course, picture,  lessons, week, views, name, balance } = props.course;
    return (
        <div className="courses">
            <img className="courses-img" src={picture} alt="" />
            <h5>{course}</h5>
            <div className="course-detail">
                <small className="views-color">{views} Views</small>
                <small className="lessons-color">{lessons} Lessons</small>
                <small className="week-color">{week} Week</small>
            </div>
            <div className="author-price">
                <p>Author: <span className="author">{name}</span></p>
                <h6>$ {balance}</h6>
            </div>
        </div>
    );
};

export default Course;