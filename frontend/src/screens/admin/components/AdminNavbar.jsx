import React, { Component } from 'react'

export default class AdminNavbar extends Component {
  render() {
    return (
      <>

      <div className="navs bg-black p-4 flex justify-between">
        <ul>
            <li className="title text-white text-xl font-[700]"><a href='/'>Admin Dashboard</a></li>

        </ul>
        <ul className='flex text-white space-x-6 mr-10'>
            <li className=""><a href='/dashboard'>Dashboard</a></li>
            <li className=""><a href='/admin/posts'>Posts</a></li>
            <li className=""><a href='/'>Visit Site</a></li>
            <li className=""><a href='/logout'>Logout</a></li>

        </ul>
      </div>
      
      </>
    )
  }
}
