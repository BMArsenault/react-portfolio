import React, { useState } from 'react';
import Project from "../Project";

const Portfolio = () => {

    const projects = [
        {
            name: 'The Hype',
            description: 'Website with the hottest trends going on in the world today.  Connect with others to talk about shared interests',
            image: require('../../assets/img/hype.png'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'Hike Spot',
            description: 'j;lkasdf',
            image: require('../../assets/img/hikespot.png'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'Work Day Scheduler',
            description: 'Easily plan your day with this workday scheduler.  Color changes with the time of day so you know where you are at in your day.',
            image: require('../../assets/img/workday.png'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'Budgeter',
            description: 'This is a PWA application that allows you to track your budget while online as well as offline. As a user, I want to be able to track my finances by deposits and withdrawls, whether I am offline or not so that I know how much money is in my account. This app is what you need to keep track of that for you!',
            image: require('../../assets/img/budget.png'),
            link: "https://github.io",
            repo: "https://github.com"
        },
        {
            name: 'Weather Dashboard',
            description: 'Check weather in any area, just enter the city to get the 5 day forecast',
            image: require('../../assets/img/weather.png'),
            link: "https://github.com",
            repo: "https://github.com"
        }
    ]

    return (
        <div>
            <div className="flex-row">
                {projects.map((project) => (
                    <Project
                    project={project}
                    key={project.name}/>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;