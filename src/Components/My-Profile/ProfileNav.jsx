import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/My-Profile-nav.css';

import { Button } from '@mui/material';

export default function ProfileNav() {
  const navigate = useNavigate();
  return (
    <nav id='subNav'>
      <Link className='link' to={"/user/Home"}><Button>Home</Button></Link>
      <Link className='link' to={"/user/Address"}> <Button>Address</Button> </Link>
      <Button className='link' onClick={() => navigate("/School/Address")}>My School</Button>
    </nav>
  )
}
