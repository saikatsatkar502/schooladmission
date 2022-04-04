import React, { useState } from 'react'
import { TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import '../style/CourseForm.css';
export default function CourseForm(props) {
    const [checked, setChecked] = React.useState(true);
    const [data, setData] = useState({
        Name: '',
        IssuingOrganization: '',
        IssueDate: '',
        ExpirationDate: '',
        CredentialId: '',
        CredentialUrl: '',
    })
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const resetHandler = () => {
        setData({
            Name: '',
            IssuingOrganization: '',
            IssueDate: '',
            ExpirationDate: '',
            CredentialId: '',
            CredentialUrl: '',
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.CourseHandler(data);
        props.handleClose();
        resetHandler();
    }

    return (
        <div id='CrsForm'><h3>Experience Form</h3>
            <form onSubmit={submitHandler} id='CourseForm' >
                <TextField className='inputBox' type="text" name="Name" id="Name" label="Name" variant="outlined" required
                    value={data.Name}
                    onChange={(e) => changeHandler(e)}
                />

                <TextField className='inputBox' id="IssuingOrganization" label="Issuing Organization" variant="outlined" name="IssuingOrganization" required
                    value={data.IssuingOrganization}
                    onChange={(e) => changeHandler(e)} />

                <div className='inputBox'>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={(e) => { setChecked(e.target.checked) }} />}
                        label="This credential does not expeire"
                    />
                </div>
                <div className='inputBox'>
                    <label htmlFor="IssueDate">Issue Date : </label>
                    <input type="date" name="IssueDate" id="IssueDate" placeholder='Issue Date' required
                        value={data.IssueDate}
                        onChange={(e) => changeHandler(e)} />
                </div>
                {
                    checked === false ?
                        (<div className='inputBox'>
                            <label htmlFor="ExpirationDate">Expiration Date : </label>
                            <input type="date" name="ExpirationDate" id="ExpirationDate" placeholder='Expiration Date'
                                value={data.ExpirationDate}
                                onChange={(e) => changeHandler(e)} />
                        </div>)
                        :
                        (null)
                }


                <TextField className='inputBox' type="text" name="CredentialId" id="CredentialId" label='Credential Id' variant='outlined' required
                    value={data.CredentialId}
                    onChange={(e) => changeHandler(e)} />

                <TextField className='inputBox' type="text" name="CredentialUrl" id="CredentialUrl" label='Credential Url' variant='outlined' 
                    value={data.CredentialUrl}
                    onChange={(e) => changeHandler(e)} />
                <input className='inputBox' type="submit" value="Save" style={{padding:"0.2rem 0.3rem", fontSize:"0.5rem"}} />
            </form>
        </div>
    )
}
