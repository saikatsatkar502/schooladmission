import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './Components/UserProfile';
import UserAddress from './Components/My-Profile/UserAddress';
import SchoolAdmission from './Components/SchoolAdmission';
import MyProfileHome from './Components/My-Profile/My-Profile-Home';
function App() {
  return (
    <div>

      <Routes>
        <Route exact path='/' element={<UserProfile />} />
        <Route exact path="/user" element={<UserProfile />} >
          <Route path="/user/" element={<MyProfileHome/>} />
          <Route path="Address" element={<UserAddress />} />
        </Route>
        <Route exact path='/School/Address' element={<SchoolAdmission />} />
      </Routes>
    </div>
  );
}

export default App;