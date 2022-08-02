import React from 'react';
import PortfolioItems from './portfolioItems';
import items from './items';

const Portfolio = () => {
    const portItems = items.map(portItem => {
        return(
            <PortfolioItems 
                key={portItem.id}
                title={portItem.title}
                category={portItem.category}
                image={portItem.image} 
                alt={portItem.alt}
                link={portItem.link}
            />
        )
    })
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                <div className="title-box text-center">
                    <h3 className="title-a">
                        Portfolio
                    </h3>
                    <div className="line-mf"></div>
                </div>
                </div>
            </div>
            <div className="row">
               {portItems}
            </div>
        </div>
    )
}
export default Portfolio;