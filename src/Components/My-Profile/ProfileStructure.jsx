import React from 'react'
import coverPic from '../../assets/uper_cover_pic.svg';
import profilePic from '../../assets/profilePic.svg';
import profilepic from '../../assets/profilepic.jpg';
import '../../styles/ProfileStructure.css'
export default function ProfileStructure() {


    const BackGroundPicture = () => {
        return (<div id='BackGroundPicture'>
            <img src={coverPic} alt="Profile pic" />
        </div>)
    }
    const ProfilePicture = () => {
        return (<div id='ProfilePicture'>
            <img src={profilepic} alt="Cover pic" style={{ width: "55%" }} />
        </div>)
    }


    return (
        <div className='profileTop'  >
            <BackGroundPicture />
            <div id='profileDetails'>
                <div className='names' style={{ marginLeft: "1rem" }}>
                    <p id='name'>Mouli Dey</p>
                    <p id='email'>@DeyMouli</p>
                </div>
                <ProfilePicture />

                <div id='actions' style={{ marginRight: "1rem" }}>
                    <button id='Edit'>Edit</button>
                </div>

            </div>

        </div>
    )
}
