import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import './style/Education.css'
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import EducationForm from './EducationDetails-Components/EducationForm';
import ViewEducation from './EducationDetails-Components/ViewEducation';

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

export default function EducationDetails() {
    const [EduDetails, setEduDetails] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const EducationDetailsHandler = (Course) => {
        const data = {
            id: uuidv4(),
            ...Course,
        }
        setEduDetails([...EduDetails, data]);
    }
    const deleteHandler = (id) => {
        const newEduDetailsList = EduDetails.filter((course) => {
            return course.id !== id;
        });
        setEduDetails(newEduDetailsList);
    }

    useEffect(() => {
        const EduDetails = JSON.parse(localStorage.getItem('EduDetails'));
        setEduDetails(EduDetails);
    }, [])


    useEffect(() => {
        localStorage.setItem('EduDetails', JSON.stringify(EduDetails));
    }, [EduDetails]);

    return (
        <div id='Course-Component'>
            <div className='header'>
                <h2>Education Details</h2>
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
                        <EducationForm EducationDetailsHandler={EducationDetailsHandler} handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (EduDetails.length < 1) ? (<p>Please click <code><b> + </b></code> to add EduDetails and Certifications </p>)
                        :
                        (<ViewEducation EduDetails={EduDetails} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
