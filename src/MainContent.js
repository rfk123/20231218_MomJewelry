import React from 'react';
import './maincontent.css'; 

function MainContent() {
    return (
        <div className="main-content">
            <div className="content-container">
                <img src={require("./leslie2.jpg")} alt="Leslie Kamali" className="profile-image" />
                <div className="text-content">
                    <p>Leslie Kamali is an innovative jewelry designer with a passion for creating unique and beautiful pieces. Follow her journey on Instagram.</p>
                    <a href="https://www.instagram.com/lesliekamali" target="_blank" rel="noopener noreferrer">Follow on Instagram</a>
                </div>
            </div>
        </div>
    );
}

export default MainContent;

