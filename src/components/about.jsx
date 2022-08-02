import React from 'react';
import './about.css'
import Profile from '../assets/images/profile.jpeg';

const About = () => {
    return(
        <section className="aboutContainer">
            <div className="row">
                <div className="col-sm-12">
                    <div className="box-shadow-full">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="col-sm-6 col-md-5">
                                        <div className="about-img">
                                            <img src={Profile} className="img-fluid rounded b-shadow-a" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-7">
                                        <div className="about-info">
                                            <p><span className="title-s">Name: </span> <span>Busari Benjamin</span></p>
                                            <p><span className="title-s">Profile: </span> <span>Junior Software Engineer</span></p>
                                            <p><span className="title-s">Email: </span> <span>benjaminbusari@gmail.com</span></p>
                                            <p><span className="title-s">Phone: </span> <span>+2349055476920</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="title-box-2">
                                    <h5 className="title-left">
                                        About me
                                    </h5>
                                </div>
                                <p className="lead">
                                    I am a Junior software engineer with knowledge of industry based technologies like Ionic Framework for Mobile App development, Angular, React, Javascript, Nest JS, Typescript,  HTML, CSS and Figma for UI Designs,
                                </p>
                                <p className="lead">
                                    As a Junior Software Engineer, I'm an analytical problem solver with a calm and focused demeanor.
                                </p>
                                <p className="lead">
                                    Passionate about development of scalable applications while also learning and sharing my knowledge with the community via technical articles published on Dev.to and Hashnode.
                                </p>
                                <p className="lead">
                                    I bring with me a great and bubbling personality, eagerness, a hunger to learn, and a keen sense of focus. My key coding strengths are Angular, React, Ionic, Typescript, and a Solid Contribution to tasks and assignments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;