import React from 'react';
import '../../styles/myProfileHome.css';
import Me from './ProfileHomeComponents/Me';
export default function MyProfileHome() {

  return (

    <div id='home'>
      <div id='me' className='home'><Me /></div>
      <div id='Experience' className='home'>

        <h2>Experience</h2>
        <p>hello</p>

      </div>
      <div id='Courses' className='home' >Courses</div>
      <div id='Skills' className='home' >Skills</div>
      <div id='Interests' className='home' >Interests</div>
    </div>
  )
}
