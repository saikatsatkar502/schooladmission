import React from 'react'
import coverPic from '../../assets/uper_cover_pic.svg';
import profilePic from '../../assets/profilePic.svg';
import '../../styles/ProfileStructure.css'
export default function ProfileStructure() {
    const ProfilePicture = () => {
        return (<div id='ProfilePicture'>
            <img src={profilePic} alt="Cover pic" />
        </div>)
    }

    const BackGroundPicture = () => {
        return (<div id='BackGroundPicture'>
            <img src={coverPic} alt="Profile pic" />
        </div>)
    }



    return (
        <div className='profileTop'  >
            <BackGroundPicture />
            <div id='profileDetails'>
                <div className='names' style={{ marginLeft: "1rem" }}>
                    <p id='name'>SoumikSarkar</p>
                    <p id='email'>@SoumikSarkar</p>
                </div>
                <ProfilePicture />
                <div id='actions' style={{ marginRight: "1rem" }}>
                    <button id='Edit'>Edit</button>
                </div>

            </div>
            
        </div>
    )
}
