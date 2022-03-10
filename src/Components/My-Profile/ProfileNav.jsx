import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@mui/material';

export default function ProfileNav() {
  const navigate = useNavigate();
  return (
    <div>
        <Link to={"Profile"}>Home</Link>
        <Link to={"Address"}>Address</Link>
        <Button onClick={()=>navigate("/School/Address")}>My School</Button>
          
        
    </div>
  )
}
