import React from 'react';
import resume from '../../assets/docs/Resume.pdf';

const Resume = () => {
    return (
    <section id="resume" className="resume mb-5">
      <div className="container">

        <div className="section-title mb-3 text-center">
          <h2>Resume</h2>
          <a href={resume} target="_blank" className="btn btn-success align-items-center" download>Download</a>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title"><u>Qualifications</u></h3>
            <br/>
            <div className="resume-item pb-0">
              <h4>Brian Arsenault</h4>
              <p>
                  <em>
                    Full Stack Developer with a background as a Project Manager. <br/>
                    Graduated as a Full Stack Web Developer through Columbia University. <br/>
                    Very creative and professional looking to further my career as a web <br/>
                    developer.
                  </em>
              </p>
              <ul>
                <li>Phoenix, AZ</li>
                <li>860-830-4195</li>
                <li>BMArsenault@gmail.com</li>
              </ul>
              <br/>
            </div>
            <hr/>
            <h3 className="resume-title"><u>Education</u></h3>
            <br/>
            <div className="resume-item">
              <h4>Certificate - Full Stack Web Development</h4>
              <h5>Sept. 2021 - Mar. 2022</h5>
              <p><em>Columbia University, New York, NY</em></p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Arts &amp; Marketing</h4>
              <h5> Sept 2001 - May 2005</h5>
              <p><em>Central Connecticut State University - New Britain, CT</em></p>
            </div>
            <br/>
            <hr/>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title"><u>Professional Experience</u></h3>
            <br/>
            <div className="resume-item">
              <h4>Test Driver</h4>
              <h5>June 2021 - Present</h5>
              <p><em>Jaguar Land Rover</em></p>
              <ul>
                <li>Drive specified daily routes to test durability of vehicle inside and out.</li>
                <li>Test Pivi/Dashboard screens for faults in cars software.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Project Manager/Purchaser</h4>
              <h5>May 2019 - March 2020</h5>
              <p><em>Alstate Steel, Phoenix, AZ</em></p>
              <ul>
                <li>Oversee multiple projects across all phases of development</li>
                <li>Develop and maintain great working relationships with colleagues and vendors</li>
                <li>Resolve open tickets in a timely and professional manner, ensuring a positive client experience</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Home Sales Coordinator</h4>
              <h5>August 2017 - December 2018</h5>
              <p><em>Valley Vistas Management Co, Scottsdale, AZ</em></p>
              <ul>
                <li>Advise dealers and distributors on policies and operating procedures to ensure functional effectiveness of business.</li>
                <li>Resolve Customer complaints regarding sales and service.</li>
                <li>Plan and direct staffing, trainer and performance evaluations to develop and control sales and service programs.</li>
                <li>Coordinate with finance companies to get loans for potential tenants.</li>
                <liv>Review sales records and reports to project sales and determine profitability.</liv>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
    );
}
export default Resume;