import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

    const [project] = useState([
        {
            name: 'The Hype',
            description: 'j;lkasdf',
            image: require('../../assets/img/'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'Hike Spot',
            description: 'j;lkasdf',
            image: require('../../assets/img/'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
            image: require('../../assets/img/'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
            image: require('../../assets/img/'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
            image: require('../../assets/img/'),
            link: "https://github.com",
            repo: "https://github.com"
        },
    ]);

    return (
        <div>
            <div className="flex-row">
                {projects.map((project, idx) => (
                    <Project
                    project={project}
                    key={"project" + idx}/>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;