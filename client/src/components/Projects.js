// ------------------------------------------------------
import React, { useEffect } from 'react'
// ------------------------------------------------------
import PageTitle from './PageTitle'
import ProjectCard from './ProjectCard'
import JobSeek from '../images/JobSeek.png'
import SideGig from '../images/SideGig.png'
// ------------------------------------------------------

const Projects = () => {
    useEffect(() => {
        document.title = 'C B | dev - PROJECTS'
    })
    const jobSeekAbout = `
    JobSeek aggregates relevant jobs and tracks applications. 
    
    Come back soon to see my progress on this app!
    `
    const sideGigAbout = `
    SideGig tracks side income with metrics and visualizations.
    
    Come back soon to see my progress on this app!
    `
    const renderApps = () => {
        return (
            <React.Fragment>
                <ProjectCard 
                    img={JobSeek}
                    alt='JobSeek icon'
                    title='JobSeek'
                    blurb='JobSeek aggregates relevant jobs and tracks applications.'
                    about={jobSeekAbout}
                />
                <ProjectCard 
                    img={SideGig}
                    alt='SideGig icon'
                    title='SideGig'
                    blurb='SideGig tracks side income with metrics and visualizations.'
                    about={sideGigAbout}
                />
            </React.Fragment>
        )
    }
    return (
        <div
            className='center-align'
            style={{ marginTop: '5%' }}
        >
            <PageTitle 
                blk1='|'
                blu1='dev'
                blk2='·'
                blu2='PROJECTS'
            />
            <hr className='h-rule' />
            <div className='row container'>
                {renderApps()}
            </div>
        </div>
    )
}

// ------------------------------------------------------
export default Projects
// ------------------------------------------------------