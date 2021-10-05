import React, { useEffect, useState } from 'react';
import './Home.css';
import homeImg from '../../images/h-3.jpg';
import HomeCourse from '../HomeCourse/HomeCourse';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    const [homeCourses, setHomeCourses] = useState([]);
    useEffect(() => {
        fetch('./homeData.JSON')
            .then(res => res.json())
            .then(data => setHomeCourses(data))
    }, [])
    return (
        <div>
            <div className="home-container d-flex align-items-center justify-content-center">
                <div className="home-title">
                    <h1>Study Beyond The Classroom</h1>
                    <p>Develop your talents by taking courses, earning certificates, and earning degrees from Learn-up world-class universities and companies instructors who are capable of building you.</p>
                    <button>Enroll Now</button>
                </div>
                <div className="home-img">
                    <img className="home-img w-100 img-fluid rounded rounded-lg-right-0 " src={homeImg} alt="" />
                </div>
            </div>
            <div className="home-course-title text-center">
                <h2>Got & Popular Categories</h2>
                <Container>
                    <Row xs={2} md={4} className="g-4">
                        {
                            homeCourses.map(homeCourse => <HomeCourse
                                key={homeCourse.id}
                                homeCourse={homeCourse}
                            ></HomeCourse>)
                        }
                    </Row>
                </Container>
                {/* <div className="home-course">
                    
                </div> */}
            </div>
        </div>
    );
};

export default Home;