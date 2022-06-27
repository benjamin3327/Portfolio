import React from 'react';

const Services = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="title-box text-center">
                        <h3 className="title-a">
                            Services
                        </h3>
                        <div className="line-mf"></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-monitor"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Web Development</h2>
                            <p className="s-description text-center">
                                I'm able to translate user interface designs to code with Angular and React Js.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-arrow-expand"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Technical Writing</h2>
                            <p className="s-description text-center">
                                As a Tech Enthusiast, i love sharing  my knowledge particularly with newbie developers or anyone with interest in Development.
                                This i'm able to do by writing articles some of which you can find on Dev.to, Hashnode amongst others.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-code-working"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">UI/UX Design</h2>
                            <p className="s-description text-center">
                                I design individual screens with which a user will interact, 
                                including the layout: what should go where? How much space should be left between each element? 
                                What visual patterns and hierarchies make for an intuitive user experience?
                                while also putting into consideration how the experience makes the user feel, and how easy it is for the user to accomplish their desired tasks. 
                                I also observe and conduct task analysis to see how users actually complete tasks in a user flow.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-android-phone-portrait"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Responsive Design</h2>
                            <p className="s-description text-center">
                                Skilled at making designs responsive and fit for various platforms
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-paintbrush"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Graphic Design</h2>
                            <p className="s-description text-center">
                                Designing high quality social media campaign materials, ecommerce flyers etc
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="ion-stats-bars"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Research & Documentation</h2>
                            <p className="s-description text-center">
                                I'm able to source for information using fact finding techniques;
                                Researching and Documenting accurately information gathered.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Services;