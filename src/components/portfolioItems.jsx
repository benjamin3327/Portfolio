import React from 'react';

const PortfolioItems = (props) => {
    return(
        <div className="col-md-4">
          <div className="work-box">
            <a href={props.link} data-lightbox="gallery-mf">
              <div className="work-img">
                <img src={props.image} alt="" className="img-fluid" />
              </div>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">{props.title}</h2>
                    <div className="w-more">
                      <span className="w-ctegory">{props.category}</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <span className="ion-ios-plus-outline"></span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
    );
}
export default PortfolioItems;