import React from 'react';
import './Home.css';
import homeImg from '../../images/h-3.jpg';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-title">
                <h1>Study Beyond The Classroom</h1>
                <p>Develop your talents by taking courses, earning certificates, and earning degrees from Learn-up world-class universities and companies instructors who are capable of building you.</p>
                <button>Enroll Now</button>
            </div>
            <div className="home-img">
                <img className="home-img w-100 img-fluid rounded rounded-lg-right-0 " src={homeImg} alt="" />
            </div>
        </div>
    );
};

export default Home;