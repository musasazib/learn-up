import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    const { course, picture, lessons, week, views, name, balance } = props.course;
    return (
        <Col className="courses">
            <Card>
                <img className="img-fluid rounded" src={picture} alt="" />
                <h5 className="p-2">{course}</h5>
                <div className="course-detail d-flex justify-content-between pb-3 pt-3 px-2">
                    <small className="views-color fw-bold">{views} Views</small>
                    <small className="lessons-color fw-bold">{lessons} Lessons</small>
                    <small className="week-color fw-bold">{week} Week</small>
                </div>
                <div className="author-price d-flex justify-content-between pt-3 pb-3 px-2">
                    <p>Author: <span className="author fw-bold">{name}</span></p>
                    <h6>$ {balance}</h6>
                </div>
            </Card>
        </Col>
    );
};

export default Course;