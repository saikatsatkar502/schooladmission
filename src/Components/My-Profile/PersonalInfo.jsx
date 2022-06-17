import React from 'react'
import '../../styles/PersonalInfo.css'
import About from './profile-persoalIfo/About'
import Address from './profile-persoalIfo/Address'
import ContactInfo from './profile-persoalIfo/ContactInfo'
import EducationDetails from './profile-persoalIfo/EducationDetails'
export default function PersonalInfo() {
  return (
    <div id='PersonalInfo'>
      <div id='AboutMe' className='PInfo'><About /> </div>
      <div id='Education-Details' className='PInfo'><EducationDetails /></div>
      <div id='ContactInfo' className='PInfo'><ContactInfo /></div>
      <div id='Address' className='PInfo' ><Address /></div>
    </div>
  )
}
