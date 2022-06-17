import React, { useState, useEffect } from 'react'
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import '../style/addressForm.css';
export default function AddressForm(props) {
    const [checked, setChecked] = useState(false);
    let address = {
        AddressLine1: "",
        AddressLine2: "",
        City: "",
        State: "",
        Pincode: "",
        Country: "",

    }
    const [currentAddress, setCurrentAddress] = useState(address);
    const [permanentAddress, setPermanentAddress] = useState(address);

    const changeCurrentAddressHandler = (e) => {
        setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
    }
    const changePermanentAddressHandler = (e) => {
        setPermanentAddress({ ...permanentAddress, [e.target.name]: e.target.value });
    }

    const reset = () => {
        setPermanentAddress(address);
    }

    useEffect(() => {
        const addr = () => {
            if (checked === true && currentAddress != null) {
                setPermanentAddress(currentAddress);
            }
            if (checked === false) {
                setPermanentAddress({
                    AddressLine1: "",
                    AddressLine2: "",
                    City: "",
                    State: "",
                    Pincode: "",
                    Country: "",
                });
            }

        }
        addr();

    }, [checked, currentAddress])


    const submitHandler = (e) => {
        e.preventDefault();
        if (checked === true) {
            setPermanentAddress(currentAddress);
        }
        let addr = {
            currentAddress: currentAddress,
            permanentAddress: permanentAddress,
        }
        props.getAddress(addr);
        console.log(addr);
        props.handleClose();
        reset();
    }

    return (
        <div>
            <div id='AddressForm'

            ><h2>Address Form</h2>


                <form onSubmit={submitHandler} id='AddressDetails' >
                    <div id='Address'>
                        <div id='CurrentAddress' >
                            <h3>Current Address</h3>

                            <TextField className='inputBox' type="text" name="AddressLine1" id="AddressLine1" label=" Address Line-1" variant="outlined" required
                                value={currentAddress.AddressLine1}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />

                            <TextField className='inputBox' type="text" name="AddressLine2" id="AddressLine2" label=" Address Line-2" variant="outlined" required
                                value={currentAddress.AddressLine2}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />

                            <TextField className='inputBox' type="text" name="City" id="City" label="City" variant="outlined" required
                                value={currentAddress.City}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />

                            <TextField className='inputBox' type="text" name="State" id="State" label="State" variant="outlined" required
                                value={currentAddress.State}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />

                            <TextField className='inputBox' type="text" name="Pincode" id="Pincode" label="Pincode" variant="outlined" required
                                value={currentAddress.Pincode}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />
                            <TextField className='inputBox' type="text" name="Country" id="Country" label="Country" variant="outlined" required
                                value={currentAddress.Country}
                                onChange={(e) => changeCurrentAddressHandler(e)}
                            />


                        </div>
                        <div>
                            {
                                checked === false ?
                                    <div id='PermanentAddress' >
                                        <h3>Parmanent Address</h3>


                                        <TextField className='inputBox' type="text" name="AddressLine1" id="AddressLine1" label=" Address Line-1" variant="outlined" required
                                            value={permanentAddress.AddressLine1}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />

                                        <TextField className='inputBox' type="text" name="AddressLine2" id="AddressLine2" label=" Address Line-2" variant="outlined" required
                                            value={permanentAddress.AddressLine2}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />

                                        <TextField className='inputBox' type="text" name="City" id="City" label="City" variant="outlined" required
                                            value={permanentAddress.City}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />

                                        <TextField className='inputBox' type="text" name="State" id="State" label="State" variant="outlined" required
                                            value={permanentAddress.State}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />

                                        <TextField className='inputBox' type="text" name="Pincode" id="Pincode" label="Pincode" variant="outlined" required
                                            value={permanentAddress.Pincode}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />
                                        <TextField className='inputBox' type="text" name="Country" id="Country" label="Country" variant="outlined" required
                                            value={permanentAddress.Country}
                                            onChange={(e) => changePermanentAddressHandler(e)}
                                        />

                                    </div>
                                    :
                                    (null)
                            }
                        </div>
                    </div>
                    <div className='inputBox'>
                        <FormControlLabel control={<Checkbox checked={checked}
                            onChange={(e) => {
                                setChecked(e.target.checked);
                            }} />}
                            label="Parmanent address is same as current address"
                        />
                    </div>

                    <input className='inputBox' type="submit" value="Save" style={{ padding: "0.2rem 0.3rem", fontSize: "1rem" }} />
                </form>

            </div>



        </div>
    )
}
