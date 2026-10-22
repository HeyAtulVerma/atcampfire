import React, { Component, createRef } from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

class Drawer extends Component {
    constructor(props) {
        super(props);
        this.drawerRef = createRef();
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (this.drawerRef.current && !this.drawerRef.current.contains(event.target)) {
            this.props.onClose();
        }
    };

    render() {
        return (
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 ${this.props.isOpen ? 'block' : 'hidden'}`}>
                <div ref={this.drawerRef} className="absolute top-0 right-0 w-64 h-full bg-gray-800 shadow-lg p-5 flex flex-col">
                    {/* <button onClick={this.props.onClose} className="text-black">Close</button> */}
                    <img src="/images/logo-removebg.png" alt="" />
                    <ul className='mt-5 space-y-4 flex-grow'>
                        <li><a href="/latest" className="text-white">Latest Podcasts</a></li>
                        <li><a href="#" className="text-white">Mysteries</a></li>
                        <li><a href="#" className="text-white">Guests</a></li>
                        <li><a href="#" className="text-white">About</a></li>
                        <li><a href="#" className="text-white">Contact</a></li>
                    </ul>
                    <ul className='mt-5 space-x-4 flex flex-wrap justify-center'>
                        <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaFacebook /></a></li>
                        <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><BsTwitterX /></a></li>
                        <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><AiFillInstagram /></a></li>
                        <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

// Drawer end

export default class xsNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
    }

    toggleDrawer = () => {
        this.setState({ isDrawerOpen: !this.state.isDrawerOpen });
    };

    closeDrawer = () => {
        this.setState({ isDrawerOpen: false });
    };

    render() {
        return (
            <>
                <nav className="lg:flex px-10 py-6 justify-between hidden">
                    <ul className='hidden lg:flex space-x-6 '>
                        <li className='pl-20'>
                            <a href="/"><img src="/images/logo.png" className='w-24 scale-150' alt="" /></a>
                        </li>
                        <div className="navs flex space-x-6 pt-2 pl-10">
                            <li><a className="group text-white transition-all duration-300 ease-in-out" href="/latest">
                                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                    Latest articles
                                </span>
                            </a></li>
                            <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                                <span className="bg-left-bottom bg-gradient-to-r from-white to white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                    Mysteries
                                </span>
                            </a></li>
                            <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                                <span className="bg-left-bottom bg-gradient-to-r from-white to white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                    Guests
                                </span>
                            </a></li>
                            <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                                <span className="bg-left-bottom bg-gradient-to-r from-white to white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                    About
                                </span>
                            </a></li>
                            <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                                <span className="bg-left-bottom bg-gradient-to-r from-white to white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                    Contact
                                </span>
                            </a></li>
                        </div>
                    </ul>
                    <div className='flex justify-center'>
                        <a href="/login" className='py-2 px-8 rounded-full text-white font-[600] mr-[50px] mt-2 bg-[#f53d68]'>Login</a>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <nav className='flex justify-between mx-5 lg:hidden'>
                    <a href='/'><img src="/images/logo.png" className='w-32 scale-150 mt-2' alt="" /></a>
                    <IoMenuOutline color='white' size={40} className='mt-4' onClick={this.toggleDrawer} />
                </nav>

                <Drawer isOpen={this.state.isDrawerOpen} onClose={this.closeDrawer} />
            </>
        );
    }
}
