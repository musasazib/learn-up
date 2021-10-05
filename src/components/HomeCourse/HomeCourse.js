import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomeCourse.css';

const HomeCourse = (props) => {
    const { name, picture, courses } = props.homeCourse;
    return (
        <Col>
            <Card className="home-course-container">
                <img className="course-img mb-1" src={picture} alt="" />
                <h4>{name}</h4>
                <h6>{courses} Courses</h6>
            </Card>
        </Col>
    );
};

export default HomeCourse;