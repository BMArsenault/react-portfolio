import React, { useState } from 'react';
import Project from "../Project";

const Portfolio = () => {

    const projects = [
        {
            name: 'Parlay Owl',
            description: 'Find hiking locations and weather at the destination of your choice.  Music is also there for you that changes depending on the weather.',
            image: require('../../assets/img/parlay.png'),
            link: "https://calm-brook-70069.herokuapp.com/",
            repo: "https://github.com/BMArsenault/ParlayOwl"
        },
        {
            name: 'The Hype',
            description: 'Website with the hottest trends going on in the world today.  Connect with others to talk about shared interests',
            image: require('../../assets/img/hype.png'),
            link: "https://immense-springs-30161.herokuapp.com/",
            repo: "https://github.com/BMArsenault/proj-02-TheHype"
        },
        {
            name: 'Hike Spot',
            description: 'Find hiking locations and weather at the destination of your choice.  Music is also there for you that changes depending on the weather.',
            image: require('../../assets/img/hikespot.png'),
            link: "https://bmarsenault.github.io/proj-01-HikeSpot/",
            repo: "https://github.com/BMArsenault/proj-01-HikeSpot"
        },
        {
            name: 'Work Scheduler',
            description: 'Easily plan your day with this workday scheduler.  Color changes with the time of day so you know where you are at in your day.',
            image: require('../../assets/img/workday.png'),
            link: "https://bmarsenault.github.io/work-scheduler/",
            repo: "https://github.com/BMArsenault/work-scheduler"
        },
        {
            name: 'Budgeter',
            description: 'This is a PWA application that allows you to track your budget while online as well as offline. As a user, I want to be able to track my finances by deposits and withdrawls, whether I am offline or not so that I know how much money is in my account. This app is what you need to keep track of that for you!',
            image: require('../../assets/img/budget.png'),
            link: "https://glacial-depths-25191.herokuapp.com/",
            repo: "https://github.com/BMArsenault/budgeter"
        },
        // {
        //     name: 'Weather Dashboard',
        //     description: 'Check weather in any area, just enter the city to get the 5 day forecast',
        //     image: require('../../assets/img/weather.png'),
        //     link: "https://bmarsenault.github.io/Weather-App/",
        //     repo: "https://github.com/BMArsenault/Weather-App"
        // },
        {
            name: 'The Tech Blog',
            description: 'Find todays tech news in one spot.  Comment, like and share with other in the community.',
            image: require('../../assets/img/techblog.png'),
            link: "https://salty-island-41291.herokuapp.com/",
            repo: "https://github.com/BMArsenault/the-tech-blog"
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