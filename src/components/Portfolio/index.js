import React, { useState } from 'react';
import Home from "../Home";

function Portfolio() {

    const [home] = useState([
        {
            name: 'The Hype',
            description: 'j;lkasdf',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'Hike Spot',
            description: 'j;lkasdf',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
            link: "https://github.com",
            repo: "https://github.com"
        },
        {
            name: 'j;laksdf',
            description: 'j;lkasdf',
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