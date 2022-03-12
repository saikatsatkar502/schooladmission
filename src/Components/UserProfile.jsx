import React from 'react'
import ProfileStructure from './My-Profile/ProfileStructure'
import { Outlet } from 'react-router-dom'
import '../styles/UserProfile.css'
import ProfileNav from './My-Profile/ProfileNav'
// import UserAddress from './My-Profile/UserAddress'
export default function UserProfile() {



	return (
		<div id='UserProfile' >

			User_Profile_Home_Page

			<ProfileStructure />

			<ProfileNav />
			<div id='elements'>
				<Outlet />
			</div>

		</div>

	)
}
