import React from 'react'
import SkillCard from './SkillCard';

export default function ViewSkill(props) {
    const deleteSkillHandler = (id)=>{
        props.deleteHandler(id);
    };
    const renderSkills = props.Skills.map((Skill) =>{
        return(
            <SkillCard Skill={Skill} cickHandler = {deleteSkillHandler} key={Skill.id} />
        );
    });
  return (
    <div id='CourseCard' >
        {
            renderSkills
        }
        
    </div>
  )
}
