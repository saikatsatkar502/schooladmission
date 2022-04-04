import React from 'react'
import CourseCard from './CourseCard';

export default function ViewCourse(props) {

    const deleteCourseHandler = (id)=>{
        props.deleteHandler(id);
    };
    const renderCourses = props.Courses.map((Course) =>{
        return(
            <CourseCard Courses={Course} cickHandler = {deleteCourseHandler} key={Course.id} />
        );
    });
  return (
    <div id='CourseCard' >
        {
            renderCourses
        }
        
    </div>
  )
}
