import React from 'react';
import Project from '../components/Project';

function Portfolio() {
    const projects = [
        {
            title: "Project 1",
            image: "path/to/image",
            deployedLink: "#",
            repoLink: "#",
        },
    ];

    return (
        <div className="container">
            <h1 className="mt-5">Portfolio</h1>
            <div className="row">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;
