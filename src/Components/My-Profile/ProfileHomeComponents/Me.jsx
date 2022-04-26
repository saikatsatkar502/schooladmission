import { Fab, Button, TextField } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react'
import DoneIcon from '@mui/icons-material/Done';
import './style/me.css'
// import Api from '../../../api/Api';
export default function Me() {
    const [me, setMe] = useState('');
    const [edit, setEdit] = useState(false);
    const [user, SetUser] = useState([]);

    // const retriveMe = async () => {
    //     const res = await Api.get("/User/1");
    //     return res.data;
    //   }

    const SaveMe = async (e) => {
        e.preventDefault();
        setEdit(false);
        localStorage.setItem('me', me)
        // let data={
        //     id:1,
        //     me:me
        // }
        // const req= await Api.put("/User/1",data);
        // SetUser(req.data);

    }


    useEffect(() => {

        let t = localStorage.getItem('me');
        setMe(t);
        // const getme = async () => {
        //     const req = await retriveMe();
        //     if(req){SetUser(req.data);
        //     }
        //   }
        //   getme();
    }, []);

    return (
        <div id='Me-Component'>
            <div className='header'>
                <h2>ME</h2>
                <Fab color="secondary" aria-label="edit" size="small" onClick={() => { setEdit(true) }}>
                    <EditIcon />
                </Fab>
            </div>
            {!edit ? (<p id='me1'>{
                me
            }</p>) : (
                <div id='Edit-Me'>
                    <TextField
                        rows={4}
                        multiline
                        label="About Me"
                        placeholder="About Me"
                        style={{ width: "100%", background: "transparent", outline: "none" }}
                        value={me}
                        onChange={(e) => { setMe(e.target.value) }}
                    />
                    <Button onClick={(e) => { SaveMe(e) }}><DoneIcon /></Button>
                </div>
            )
            }

        </div>
    )
}
