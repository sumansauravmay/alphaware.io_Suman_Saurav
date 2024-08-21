import React from 'react';
import { Routes, Route } from "react-router-dom";
import Register from '../pages/Register';
import Login from '../pages/Login';
import AllJobsData from '../pages/AllJobsData';
import PostJob from '../pages/PostJob';
import AdminData from '../pages/AdminData';

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Register/>}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/alldata" element={<AllJobsData/>}></Route>
    <Route path="/postdataform" element={<PostJob />}></Route>
    <Route path="/admindata" element={<AdminData />}></Route>
    
  </Routes>
  )
}

export default AllRoutes;
