// ------------------------------------------------------
import React from 'react'
// ------------------------------------------------------

const ProjectCard = ({ img, alt, title, blurb, about }) => {
    return (
        <div className='col s12 m12 l6'>
            <div className='card'>
                <div 
                    className='
                        card-image waves-effect 
                        waves-block waves-light'
                    style={{ textAlign: 'center' }}
                >
                    <img 
                        src={img} alt={alt}
                        className='activator'
                        style={{ 
                            maxWidth: '15vw', 
                            minWidth: '15vw',
                            display: 'inline-block'
                        }}
                    />
                </div>
                <div className='card-content'>
                    <span className='card-title activator left-align'>
                        {title}
                        <i className='material-icons right'>
                            more_vert
                        </i>
                    </span>
                    <p className='left-align'>
                        {blurb}
                    </p>
                </div>
                <div className='card-reveal'>
                    <span className='card-title left-align'>
                        {title}
                        <i className='material-icons right'>
                            close
                        </i>
                    </span>
                    <p 
                        className='left-align'
                        style={{ whiteSpace: 'pre-wrap' }}
                    >
                        {about}
                    </p>
                </div>
            </div>
        </div>
    )
}

// ------------------------------------------------------
export default ProjectCard
// ------------------------------------------------------