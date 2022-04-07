import React, { useState } from 'react'
import { TextField, InputLabel, FormControl } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../style/SkillForm.css';
export default function SkillForm(props) {
    const [data, setData] = useState({
        Name: '',
        SkillType: '',
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetHandler = () => {
        setData({
            Name: '',
            SkillType: '',
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.SkillHandler(data);
        props.handleClose();
        resetHandler();
    }

    return (
        <div id='SklForm'><h3>Skill Form</h3>
            <form onSubmit={submitHandler} id='SkillForm' >
                
                <FormControl fullWidth className='inputBox'>
                    <InputLabel id="demo-simple-select-label" >Skill-Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        name='SkillType'
                        label='Skill - Type'
                        required
                        value={data.SkillType}
                        onChange={(e) => changeHandler(e)}
                    >
                        <MenuItem value={"Technical & Industry"} >Technical and Industry</MenuItem>
                        <MenuItem value={"Education"}>Education</MenuItem>
                        <MenuItem value={"Design"}>Design</MenuItem>
                        <MenuItem value={"Communication"}>Communication</MenuItem>
                        <MenuItem value={"Management"}>Management</MenuItem>
                    </Select>
                </FormControl>

                <TextField className='inputBox' type="text" name="Name" id="Name" label="Skill Name" variant="outlined" required
                    value={data.Name}
                    onChange={(e) => changeHandler(e)}
                />
                <input className='inputBox' type="submit" value="Save" style={{ padding: "0.2rem 0.3rem", fontSize: "1rem" }} />
            </form>
        </div>
    )
}
