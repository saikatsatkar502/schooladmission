import React, { useState } from 'react'
import { FormControl, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function ContactForm(props) {
    // const contactType = props.contactType;
    // const { error, msg, country_data } = props.country;

    const [data, setData] = useState({
        ContactType: "",
        CountryCode: "",
        MobileNo: "",
    })


    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetHandler = () => {
        setData({
            ContactType: "",
            CountryCode: "",
            MobileNo: "",

        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.ContactDetailsHandler(data);
        props.handleClose();
        resetHandler();
    }

    return (
        <div id='EduForm'><h3>Education</h3>
            <form onSubmit={submitHandler} id='EduDetails' >

                <FormControl fullWidth className='inputBox'>
                    <InputLabel id="demo-simple-select-label" >Select Contact Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.ContactType}
                        label="Select Contact Type"
                        name='ContactType'
                        required
                        onChange={(e) => changeHandler(e)}
                    >
                        <MenuItem value={"Home"}>Home</MenuItem>
                        <MenuItem value={"Work"}>Work</MenuItem>
                        <MenuItem value={"Personal"}>Personal</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth className='inputBox'>
                    <InputLabel id="demo-simple-select-label" >Select Country Code</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={data.CountryCode}
                        label="Select Country Code"
                        name='CountryCode'
                        required
                        onChange={(e) => changeHandler(e)}
                    >
                        {
                            props.country.map(c => {
                                return (
                                    <MenuItem value={c.dial_code} key={c.code} ><code>{c.name} - {c.dial_code}</code> </MenuItem>
                                )
                            })
                        }

                    </Select>
                </FormControl>



                <TextField className='inputBox' type="tel" name="MobileNo" id="MobileNo" label="Mobile No" variant="outlined" required
                    value={data.MobileNo}
                    onChange={(e) => changeHandler(e)}
                />


                <input className='inputBox' type="submit" value="Save" style={{ padding: "0.2rem 0.3rem", fontSize: "1rem" }} />
            </form>
        </div>
    )
}
