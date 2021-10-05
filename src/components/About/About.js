import React from 'react';
import './About.css';
import aboutImg from '../../images/edu_2.png';
import user from '../../images/user-2.jpg';

const About = () => {
    return (
        <div>
            <h1 className="title fw-bold text-center">About Us</h1>
            <div className="d-flex align-items-center justify-content-center">
                <div className="p-5">
                    <h4 className="fw-bold">Know About <span className="font-color">E-Learn</span> Learning Platform</h4>
                    <br />
                    <h6>Cost Effective</h6>
                    <p>Learned is one of the cost effective learning centres from last decade.</p>
                    <br />
                    <h6>Improves Performance And Productivity</h6>
                    <p>Learnup helps learners to train quicker and the easiest way to increase performance.</p>
                    <br />
                    <h6>Saves Time</h6>
                    <p>Our instructor uploads the materials in time and shares the content with the learners in time.</p>
                </div>
                <div>
                    <img src={aboutImg} alt="" />
                </div>
            </div>
            <div className="student-review text-center p-5">
                <small>What People Say?</small>
                <h3> <span className="font-color">Reviews</span> By Our Success & Top Students</h3>
                <img src={user} alt="" />
                <h5>Rout Millance</h5>
                <p>Web Designer</p>
                <p>We wanted something with scale, credibility, and something we didn't have to construct ourselves. Learnup is a platform that not only provides instruction from prominent schools, but also allows you to track your progress. We believe you will understand our course easily.</p>
            </div>
        </div>
    );
};

export default About;