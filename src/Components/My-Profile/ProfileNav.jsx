import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/My-Profile-nav.css';

import { Button } from '@mui/material';

export default function ProfileNav() {
  const navigate = useNavigate();
  return (
    <nav id='subNav'>
      <Link className='link' to={"/"}><Button>Home</Button></Link>
      <Link className='link' to={"/user/myInfo"}> <Button>My Info</Button> </Link>
      <Button className='link' onClick={() => navigate("/School/Address")}>My School</Button>
    </nav>
  )
}
