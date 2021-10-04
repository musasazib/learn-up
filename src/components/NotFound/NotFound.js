import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="error">Error Page</h1>
            <div className="error-text">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>We’re unable to find a page you are looking for, Try later or click the button.</p>
            </div>
        </div>
    );
};

export default NotFound;