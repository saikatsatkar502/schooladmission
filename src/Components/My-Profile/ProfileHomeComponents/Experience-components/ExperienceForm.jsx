import React, { useState } from 'react'
import { FormControl, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../style/experienceForm.css';
export default function ExperienceForm(props) {
    const [checked, setChecked] = React.useState(true);
    const [data, setData] = useState({
        Title: '',
        EmployementType: '',
        CompanyName: '',
        Location: '',
        StartDate: '',
        EndDate: '',
        HeadLine: '',
        Description: '',
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetHandler = () => {
        setData({
            Title: '',
            EmployementType: '',
            CompanyName: '',
            Location: '',
            StartDate: '',
            EndDate: '',
            HeadLine: '',
            Description: '',
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.ExperienceHandler(data);
        props.handleClose();
        resetHandler();
    }

    return (
        <div id='expForm'><h3>Experience Form</h3>
            <form onSubmit={submitHandler} id='ExperienceForm' >
                <TextField className='inputBox' type="text" name="Title" id="title" label="Title" variant="outlined" required
                    value={data.Title}
                    onChange={(e) => changeHandler(e)}
                />
                <FormControl fullWidth className='inputBox'>
                    <InputLabel id="demo-simple-select-label" >Employement Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.EmployementType}
                        label="Employement-Type"
                        name='EmployementType'
                        required
                        onChange={(e) => changeHandler(e)}
                    >
                        <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                        <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
                        <MenuItem value={"Self-Employed"}>Self-Employed</MenuItem>
                        <MenuItem value={"Internship"}>Internship</MenuItem>
                        <MenuItem value={"Trainee"}>Trainee</MenuItem>
                    </Select>
                </FormControl>

                <TextField className='inputBox' id="CompanyName" label="Company Name" variant="outlined" name="CompanyName" required
                    value={data.CompanyName}
                    onChange={(e) => changeHandler(e)} />

                <TextField className='inputBox' type="text" name="Location" id="Location" label='Location' variant='outlined' required
                    value={data.Location}
                    onChange={(e) => changeHandler(e)} />
                <div className='inputBox'>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={(e)=>{setChecked(e.target.checked)}} />} 
                    label="I am currently working in this Role" 
                    />
                </div>
                <div className='inputBox'>
                    <label htmlFor="StartDate">Start Date : </label>
                    <input type="date" name="StartDate" id="StartDate" placeholder='Start Date' required
                        value={data.StartDate}
                        onChange={(e) => changeHandler(e)} />
                </div>
                {
                    checked === false ?
                    (<div className='inputBox'>
                    <label htmlFor="EndDate">End Date : </label>
                    <input type="date" name="EndDate" id="EndDate" placeholder='End Date'
                        value={data.EndDate}
                        onChange={(e) => changeHandler(e)} />
                </div>)
                :
                (null)
                }
                
                
                <TextField className='inputBox' type="text" name="HeadLine" id="HeadLine" label='Head Line' variant='outlined'
                    value={data.HeadLine}
                    onChange={(e) => changeHandler(e)} />

                <TextField
                    className='inputBox'
                    name='Description'
                    multiline
                    label="Description"
                    rows={4}
                    placeholder="Description"
                    style={{ width: "100%", background: "transparent" }}
                    value={data.Description}
                    onChange={(e) => changeHandler(e)}
                />
                <input className='inputBox' type="submit" value="Save" />
            </form>
        </div>
    )
}
