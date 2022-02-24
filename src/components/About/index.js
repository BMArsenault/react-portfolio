import React from 'react';
import aboutImage from "../../assets/img/brian.jpg";

function About() {
    return (
        <section className="about container-fluid">
            <div className="container">
                <div className="text-center title mb-5">
                    <h1 id="about">About Me</h1>
                </div>

                <div className="row align-items-center">
                    <div className="col-12 col-lg-4 about-img">
                        <img src={aboutImage} alt="Brian smiling" width="250px" height="250px"/>
                    </div>
                    <div className="col-12 col-lg-8 about-text">
                        <p>
                        My name is Brian Arsenault.  I spent the first 32 years of my life growing up in Connecticut where I graduated with a Bachelor's degree in Marketing from Central Connecticut State University.
                        I have worked all types of jobs throughout my life but mainly have been a project manager.
                        </p>
                        <br/>
                        <p>
                        After moving to AZ and the pandemic, I was looking to get into something different.  I spoke with a friend who had recently graduated from coding bootcamp and told me he really enjoyed it and that I should look into it.  I took his advice and did some research.
                        Needless to say I am currently enrolled in a coding bootcamp through Columbia University set to graduate mid March, 2022.  One of the main reasons that got me into coding bootcamp was to turn my creative ideas into a career that will let me showcase my skills with an employer, friends or family.
                        </p>    
                    </div>
                </div>     
            </div>
            <br/>
            <br/>
        </section>
    );
}

export default About;