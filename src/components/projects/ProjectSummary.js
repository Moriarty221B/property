/*Provides template for project details to show */

import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';


const ProjectSummary = ({project})=>{
    return(

        <div>
      <Card>
        <CardImg top width="100%" src="/img/penthouse.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>{project.title}</CardTitle>
          <CardSubtitle>3 bedroom penthouse</CardSubtitle>
          <CardText>Located in the good place close to the good things etcetera...</CardText>
        </CardBody>
      </Card>
    </div>
        
    )
}

export default ProjectSummary