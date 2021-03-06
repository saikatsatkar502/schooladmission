import React from 'react'
import ExpCard from './ExpCard';

export default function ViewExperience(props) {

    const deleteContactHandler = (id)=>{
        props.deleteHandler(id);
    };
    const renderExperiences = props.Experiences.map((Experience) =>{
        return(
            <ExpCard Experience={Experience} cickHandler = {deleteContactHandler} key={Experience.id} />
        );
    });
  return (
    <div>
        {
            renderExperiences
        }
        
    </div>
  )
}
