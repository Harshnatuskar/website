import React from 'react';
import PortfolioItem from './PortfolioItem';
import portfolio from '../data/portfolio';
import ui_showcase from '../data/ui_showcase';
import "../styles/animations.css"

function Portfolio(){
    return (
        <div data-animate className="slide-enter-content flex flex-col md:flex-row items-center justify-center ">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))} 
                
                {ui_showcase.map(project =>(
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))
                }
            </div>
        </div>
    )
}

export default Portfolio;