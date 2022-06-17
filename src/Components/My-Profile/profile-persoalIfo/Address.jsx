import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Backdrop from '@mui/material/Backdrop';
import { Fade, Box } from '@mui/material';
import './style/Addrerss.css'
import AddressForm from './Address-Component/AddressForm';
import ViewAddress from './Address-Component/ViewAddress';


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


export default function Address() {
    const [address, setAddress] = useState({
        currentAddress: "",
        permanentAddress: "",
    });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const getAddress = (Address) => {
        setAddress(Address);
    }
    const deleteHandler = (id) => {
        const newContactDetailsList = address.filter((course) => {
            return course.id !== id;
        });
        Address(newContactDetailsList);
    }
    return (
        <div id='Address-Component'>
            <div className='header'>
                <h2>Address Details</h2>
                <Fab size="small" color="primary" aria-label="add" onClick={handleOpen} >
                    {
                        address.currentAddress === "" && address.permanentAddress === "" ? (<AddIcon />) : (<EditIcon />)
                    }
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
                        <AddressForm getAddress={getAddress} handleClose={handleClose}
                        />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (address.currentAddress === "" && address.permanentAddress === "") ? (<p>Please click <code><b> + </b></code> to add Address Details. </p>)
                        :
                        (<ViewAddress Address={address} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
