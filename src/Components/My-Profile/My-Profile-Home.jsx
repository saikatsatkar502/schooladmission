import React from 'react';
import '../../styles/myProfileHome.css';
import Courses from './ProfileHomeComponents/Courses';
import Experience from './ProfileHomeComponents/Experience';
import Me from './ProfileHomeComponents/Me';
import Skill from './ProfileHomeComponents/Skill';
export default function MyProfileHome() {

  return (

    <div id='home'>
      <div id='me' className='home'><Me /></div>
      <div id='Experience' className='home'><Experience />
      </div>
      <div id='Courses' className='home' ><Courses /></div>
      <div id='Skills' className='home' ><Skill/></div>
      <div id='Interests' className='home' >Interests</div>
    </div>
  )
}
