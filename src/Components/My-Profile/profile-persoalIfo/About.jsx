import { Fab, Button, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import './style/About.css'
export default function About() {
    const [About, setAbout] = useState('');
    const [edit, setEdit] = useState(false);

    const SaveAbout = async (e) => {
        e.preventDefault();
        setEdit(false);
        localStorage.setItem('About', About)
    }


    useEffect(() => {

        let t = localStorage.getItem('About');
        setAbout(t);
    }, []);

    return (
        <div id='About-Component'>
            <div className='header'>
                <h2>About</h2>
                <Fab color="secondary" aria-label="edit" size="small" onClick={() => { setEdit(true) }}>
                    <EditIcon />
                </Fab>
            </div>
            {!edit ? (<p id='About1'>{
                About
            }</p>) : (
                <div id='Edit-About'>
                    <TextField
                        rows={4}
                        multiline
                        label="About"
                        placeholder="About"
                        style={{ width: "100%", background: "transparent", outline: "none" }}
                        value={About}
                        onChange={(e) => { setAbout(e.target.value) }}
                    />
                    <Button onClick={(e) => { SaveAbout(e) }}><DoneIcon /></Button>
                </div>
            )
            }

        </div>
    )
}
