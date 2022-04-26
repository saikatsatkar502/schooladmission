import React from 'react'
import EducationCard from './EducationCard';

export default function ViewEducation(props) {
  const deleteCourseHandler = (id)=>{
    props.deleteHandler(id);
};
const renderEduDetails = props.EduDetails.map((Edu) =>{
    return(
        <EducationCard Education={Edu} cickHandler = {deleteCourseHandler} key={Edu.id} />
    );
});
return (
<div id='CourseCard' >
    {
        renderEduDetails
    }
    
</div>
)
}
