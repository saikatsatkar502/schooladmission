import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import axios from 'axios';
import './style/Contact.css'
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './ContactInfo-Component/ContactForm';
import ViewContactInfo from './ContactInfo-Component/ViewContactInfo';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "auto",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};

export default function ContactInfo() {
    const [ContactDetails, setContactDetails] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [country, setCountry] = useState([]);

    const ContactDetailsHandler = (Contact) => {
        const data = {
            id: uuidv4(),
            ...Contact,
        }
        setContactDetails([...ContactDetails, data]);
    }
    const deleteHandler = (id) => {
        const newContactDetailsList = ContactDetails.filter((course) => {
            return course.id !== id;
        });
        setContactDetails(newContactDetailsList);
    }

    useEffect(() => {
        const ContactDetails = JSON.parse(localStorage.getItem('ContactDetails'));
        setContactDetails(ContactDetails);

    }, [])

    useEffect(() => {
        var config = {
            method: 'get',
            url: 'https://countriesnow.space/api/v0.1/countries/codes',
            headers: {

            }
        };
        const data = async () => {
            await axios(config)
                .then(function (response) {
                    setCountry(response.data.data);
                })
                .catch(function (error) {
                    console.log(error);
                });
        };
        data();
    }, []);

    useEffect(() => {
        localStorage.setItem('ContactDetails', JSON.stringify(ContactDetails));

    }, [ContactDetails]);

    return (
        <div id='ContactDetails-Component'>
            <div className='header'>
                <h2>Contact Details</h2>
                <Fab size="small" color="primary" aria-label="add" onClick={handleOpen} >
                    <AddIcon />
                </Fab>
            </div>
            <Modal

                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ContactForm ContactDetailsHandler={ContactDetailsHandler} country={country} handleClose={handleClose}
                        />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (ContactDetails.length < 1) ? (<p>Please click <code><b> + </b></code> to add Contact Details. </p>)
                        :
                        (<ViewContactInfo Contacts={ContactDetails} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
