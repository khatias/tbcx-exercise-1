import React from 'react'
import ProfileForm from './ProfileForm'
import "./ProfilePage.css"
import myImage from '../../assets/Khatia.jpg'; 



function ProfileContent() {
  return (
    <main>
        <div className='container'>
            <h1 className='profile-heading'>PROFILE</h1>
            <img className='profile-img' src={myImage} alt="profile-img" />
            <ProfileForm />
        </div>
    </main>
  )
}

export default ProfileContent