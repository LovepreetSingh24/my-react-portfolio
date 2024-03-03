import React from 'react';

function Resume() {
    return (
        <div className="container">
            <h1 className="mt-5">Resume</h1>
            <p>
                <a href="path/to/your_resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Download My Resume</a>
            </p>
            <h2>Proficiencies</h2>
            <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
            </ul>
        </div>
    );
}

export default Resume;
