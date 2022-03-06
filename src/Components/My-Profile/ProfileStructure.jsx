import React from 'react'
import coverPic from '../../assets/uper_cover_pic.svg';
import '../../styles/ProfileStructure.css'
export default function ProfileStructure() {

    const BackGroundPicture = () => {
        return (<div id='BackGroundPicture'>
            <img src={coverPic} alt="cover pic" />
        </div>)
    }

    return (
        <div className='ProfileTop'>
            <BackGroundPicture/>
            <div id='profile'>

            </div>


        </div>
    )
}
