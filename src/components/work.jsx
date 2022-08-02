import React from 'react';
import Counters from '../assets/images/counters-bg.jpg';

const Works = () => {
    return(
        <div className="section-counter paralax-mf bg-image" style={{backgroundImage: `url(${Counters})`}}>
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle"><i className="ion-ios-calendar-outline"></i></span>
                            </div>
                            <div className="counter-num">
                                <p className="counter">3</p>
                                <span className="counter-text">YEARS OF EXPERIENCE</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-lg-3">
                        <div className="counter-box pt-4 pt-md-0">
                            <div className="counter-ico">
                                <span className="ico-circle"><i className="ion-checkmark-round"></i></span>
                            </div>
                            <div className="counter-num">
                                <p className="counter">7</p>
                                <span className="counter-text">WORKS COMPLETED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Works;