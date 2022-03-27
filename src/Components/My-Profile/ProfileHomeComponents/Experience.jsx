import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import './style/Experience.css'
import ExperienceForm from './Experience-components/ExperienceForm';
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ViewExperience from './Experience-components/ViewExperience';

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

export default function Experience() {
    const [Experiences, setExperiences] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const ExperienceHandler = (Experience) => {
        const data={
            id: uuidv4(),
            ...Experience
        }
        setExperiences([...Experiences, data]);
    }

    useEffect(() => {
        localStorage.setItem('Experiences', JSON.stringify(Experiences));
    }, [Experiences]);

    useEffect(() => {
        const Experiences = JSON.parse(localStorage.getItem('Experiences'));
        if (Experiences) {
            setExperiences(Experiences);
        }
    }, [])
    const deleteHandler = (id)=>{

    }

    return (
        <div id='Experience-Component'>
            <div className='header'>
                <h2>Experience</h2>
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
                        <ExperienceForm ExperienceHandler={ExperienceHandler} handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                <ViewExperience Experiences={Experiences} deleteHandler={deleteHandler} />
            </div>


        </div>
    )
}
