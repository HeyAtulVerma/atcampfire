import { Component } from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";



export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="ft lg:px-10 px-6 py-10 bg-[#05060e] mt-10">
          <div className="topsctn lg:flex p-5 lg:justify-between lg:flex-row-reverse">

            <div className="flex justify-center">
              <p className="bg-[#f53d68] w-fit lg:w-auto lg:px-10 py-4 h-[85px] font-[700] lg:mr-10 outline-white hover:bg-[#cc4f6c] cursor-pointer px-6 text-white">LISTEN A FREE <br /> PODCAST NOW</p>
            </div>



            <h1 className="lg:w-2/5 text-white lg:text-3xl text-md mt-6 lg:mt-0">We help companies transform their ambitious ideas into timeless products at lightning speed.</h1>
          </div>
          <hr className="lg:mt-10 mt-2 border-[#f53d68]" />
          <div className="lg:flex lg:justify-between mt-5 text-white">
            <p className='text-center mb-2 lg:mb-0'>&copy; ATCampfire | All Rights Reserved  </p>
            <ul className="flex space-x-6">
              <li className='text-[#f53d68]'><a href="">Home</a></li>
              <li className='text-[#f53d68]'><a href="">About</a></li>
              <li className='text-[#f53d68]'><a href="">Contact</a></li>
              <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaFacebook /></a></li>
              <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><BsTwitterX /></a></li>
              <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><AiFillInstagram /></a></li>
              <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaLinkedin /></a></li>
            </ul>
          </div>
        </div>

      </>
    )
  }
}
