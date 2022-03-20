import { TextareaAutosize, Fab, Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import './style/me.css'
export default function Me() {
    const [me, setMe] = useState('');
    const [edit, setEdit] = useState(false);
    
    useEffect(()=>{
        let t = localStorage.getItem('me');
        setMe(t);
    },[]);

    return (
        <div id='Me-Component'>
            <div className='header'>
                <h2>ME</h2>
                <Fab color="secondary" aria-label="edit" size="small"  onClick={() => { setEdit(true) }}>
                    <EditIcon />
                </Fab>
            </div>
            {!edit ? (<p id='me'>{me}</p>) : (
                <div id='Edit-Me'>
                    <TextareaAutosize
                        aria-label="minimum height"
                        minRows={4}
                        placeholder= "About Me"
                        style={{ width: "100%" ,background:"transparent",outline:"none"}}
                        value={me}
                        onChange={(e) => { setMe(e.target.value) }}
                    />
                    <Button onClick={()=>{setEdit(false);localStorage.setItem('me',me)}}><DoneIcon/></Button>
                </div>
            )
            }

        </div>
    )
}
