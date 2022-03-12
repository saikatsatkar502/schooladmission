import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import SchoolAdmission from './Components/SchoolAdmission';
import MyProfileHome from './Components/My-Profile/My-Profile-Home';
import PersonalInfo from './Components/My-Profile/PersonalInfo';
function App() {
  return (
    <div>

      <Routes>
        {/* <Route exact path='/' element={<UserProfile />} /> */}
        <Route exact path="/" element={<UserProfile />} >
          <Route path="/" element={<MyProfileHome/>} />
          <Route path="user/myInfo" element={<PersonalInfo />} />
        </Route>
        <Route exact path='/School/Address' element={<SchoolAdmission />} />
      </Routes>
    </div>
  );
}

export default App;