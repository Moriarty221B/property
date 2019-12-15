/**Lists project (property listing) details */
import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList= ({projects})=>{
    return(
        <div className="project-list section">
            {/**map through objects if they exist and return project summary with assigned key value*/}
            {projects && projects.map(project=>{
                return(
                    <ProjectSummary project={project} key={project.id}/>
                )
            })}

        </div>
    )
}

export default ProjectList