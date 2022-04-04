import React, { useState, useEffect } from 'react'
import Fab from '@mui/material/Fab';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Backdrop from '@mui/material/Backdrop';
import './style/Course.css'
import { Fade, Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ViewCourse from './Courses-components/ViewCourse';
import CourseForm from './Courses-components/CourseForm';

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

export default function Courses() {
    const [Courses, setCourses] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const CourseHandler = (Course) => {
        const data={
            id: uuidv4(),
            ...Course,
        }
        setCourses([...Courses, data]);
    }
    const deleteHandler = (id)=>{
        const newCourseList = Courses.filter((course) => {
            return course.id !== id;
          });
          setCourses(newCourseList);
    }

    useEffect(() => {
        const Courses = JSON.parse(localStorage.getItem('Courses'));
        setCourses(Courses);
    }, [])
   

    useEffect(() => {
        localStorage.setItem('Courses', JSON.stringify(Courses));
    }, [Courses]);

    return (
        <div id='Course-Component'>
            <div className='header'>
                <h2>Courses and Certification</h2>
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
                        <CourseForm CourseHandler={CourseHandler} handleClose={handleClose} />
                    </Box>
                </Fade>
            </Modal>
            <div id='data'>
                {
                    (Courses.length <1) ? (<p>Please click <code><b> + </b></code> to add Courses and Certifications </p>)
                    :
                    (<ViewCourse Courses={Courses} deleteHandler={deleteHandler} />)
                }
            </div>

        </div>
    )
}
