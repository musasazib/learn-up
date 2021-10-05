import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./courseData.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h1 className="title text-center fw-bold">Courses</h1>
            <Row xs={2} md={4} className="courses-container g-4">
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </Row>
        </div>
    );
};

export default Courses;