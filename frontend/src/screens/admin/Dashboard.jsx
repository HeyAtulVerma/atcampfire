import React, { Component } from 'react'
import AdminNavbar from './components/AdminNavbar'
import AdminSidebar from './components/AdminSidebar'
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import Login from './Login';
import Posts from './Posts';
import { Outlet } from 'react-router-dom';


export default class Dashboard extends Component {
  render() {
    return (
      <>
      {/* <AdminNavbar/>

      <div className="flex">
      <AdminSidebar/>

      
      

      </div> */}


      <AdminNavbar />
      <div className="flex">
        <AdminSidebar />
        <div className="flex-1 p-4 bg-[#0e1226]">
        <Outlet />
          
        </div>
      </div>

      
      
      
      </>
    )
  }
}
