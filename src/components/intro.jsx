import React from 'react';
import Overlay from '../assets/images/overlay-bg.jpg';


const Intro = () => {
    return (
        <div id="home" className="intro route bg-image" style={{ 
            backgroundImage: `url(${Overlay})` 
          }}>
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="intro-title mb-4">Benjamin Busari</h1>
                        <p className="intro-subtitle">
                            <span className="text-slider-items">As a Software Engineer, 
                                I create positively memorable experiences for web and mobile applications users by applying strategic and innovative approaches. 
                            </span>
                            <strong className="text-slider"></strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Intro;