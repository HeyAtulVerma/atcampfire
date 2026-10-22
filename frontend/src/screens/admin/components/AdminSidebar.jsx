import React, { Component } from 'react'

export default class AdminSidebar extends Component {
  render() {
    return (
      <>

<div className="box1 bg-black h-[550px] w-1/5 p-6 text-white">
        {/* <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2> */}
        <ul className=' pt-10 divide-y-2'>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/dashboard">Dashboard</a></li>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/posts">Posts</a></li>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/categories">Categories</a></li>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/users">Users</a></li>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/settings">Settings</a></li>
          <li className="mb-2 mt-2 text-2xl pt-4"><a href="/admin/logout">Logout</a></li>
          <li></li>
        </ul>
      </div>
      
      </>
    )
  }
}
