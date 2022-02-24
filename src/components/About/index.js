import React from 'react';

function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="text-center title">
                    <h1 id="about">About Me</h1>
                </div>
                <div className="box-style">
                    <div className="col-12 col-lg-4 about-img">
                        <img src={require('../../assets/img/brian.jpg')} alt="Brian smiling" width="200px" height="200px"/>
                    </div>
                    <div className="about-text">
                        <p>
                        My name is Brian Arsenault.  I spent the first 32 years of my life growing up in Connecticut where I graduated with a Bachelor's degree in Marketing from Central Connecticut State University.
                        I have worked all types of jobs throughout my life but mainly have been a project manager.
                        </p>
                        <br/>
                        <p>
                        After looking to get into something different, I spoke with a friend who had recently graduated from coding bootcamp and told me he really enjoyed it and that I should look into it.  I took his advice and did some research.
                        Needless to say I am currently enrolled in a coding bootcamp through Columbia University set to graduate mid March, 2022.  One of the main reasons that got me into coding bootcamp was to turn my creative ideas into a career that will let me showcase my skills with an employer, friends or family.
                        </p>    
                    </div>
                </div>     
            </div>
        </section>
    );
}

export default About;