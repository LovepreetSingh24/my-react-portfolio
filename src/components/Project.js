import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
    return (
        <div className="project">
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <a href={deployedLink}>Deployed App</a>
            <a href={repoLink}>GitHub Repo</a>
        </div>
    );
}

export default Project;
