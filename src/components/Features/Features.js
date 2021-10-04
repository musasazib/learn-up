import React from 'react';
import './Features.css';
import img from '../../images/testimonialv4-img.webp';
const Features = () => {
    return (
        <div>
            <h1 className="title">Features</h1>
            <div className="feature-text">
                <div className="header-text">
                    <h3>Learn Adobe CC with our Masterclass</h3>
                    <h6>In this Adobe CC Masterclass, you will learn Photostat, Illustrator, Adobe XD, InDesign & more. Register now.</h6>
                </div>
                <div className="feature-detail">
                    <h5>Course Description</h5>
                    <p>In this course, you will learn Photostat, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Legroom Classic, the photo editing app that's optimized for desktops.</p>
                    <br />
                    <h5>Course Description</h5>
                    <p>This complete beginner's course will help you to feel confident and comfortable using Tightrope to edit your own photos like a pro. Oslo, learn how to craft footage into polished videos in one seamless workflow.</p>
                    <br />
                    <h5>Course Description</h5>
                    <p>You will learn how to master the tools you need with best-in-class training courses to become an expert with the world's best platform for artists and dreamers and many more with us.</p>
                </div>
            </div>
            <div className="feature-review">
                <div>
                    <h5>I love to learn new things and skills has help me a lot to learn more new things and new courses.</h5>
                    <br />
                    <p>Riaz Surti | Hearthy Foods</p>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Features;