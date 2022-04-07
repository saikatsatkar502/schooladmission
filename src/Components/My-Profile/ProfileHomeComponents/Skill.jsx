import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import './style/Skill.css'
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ViewSkill from './Skill-Components/ViewSkill';
import SkillForm from './Skill-Components/SkillForm';

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
export default function Skill() {
    const [Skills, setSkills] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const SkillHandler = (Skill) => {
        const data={
            id: uuidv4(),
            ...Skill,
        }
        setSkills([...Skills, data]);
    }
    const deleteHandler = (id)=>{
        const newSkillsList = Skills.filter((course) => {
            return course.id !== id;
          });
          setSkills(newSkillsList);
    }

    useEffect(() => {
        const Skills = JSON.parse(localStorage.getItem('Skills'));
        setSkills(Skills);
    }, [])
   

    useEffect(() => {
        localStorage.setItem('Skills', JSON.stringify(Skills));
    }, [Skills]);

    return (
        <div id='Skill-Component'>
            <div className='header'>
                <h2>Skills </h2>
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
                        <SkillForm SkillHandler={SkillHandler} handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (Skills.length <1) ? (<p>Please click <code><b> + </b></code> to add Skills</p>)
                    :
                    (<ViewSkill Skills={Skills} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
