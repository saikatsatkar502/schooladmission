import React from 'react'
import ProfileStructure from './My-Profile/ProfileStructure'
import { Navigate, Outlet } from 'react-router-dom'
import '../styles/UserProfile.css'
import ProfileNav from './My-Profile/ProfileNav'
import { Button } from '@mui/material'
// import UserAddress from './My-Profile/UserAddress'
export default function UserProfile() {



	return (
		<div id='UserProfile' >

			<div className="Header">

				<h1>PROMORA</h1>
				<Button onClick={() => Navigate("/")}>My Profile</Button>

			</div>

			<ProfileStructure />

			<ProfileNav />
			<div id='elements'>
				<Outlet />
			</div>

		</div>

	)
}
