'use client'

import { AuthContext } from '@/context/AuthProvider';
import { useContext, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

import Image from 'next/image';
import { FiChevronDown } from "react-icons/fi";

const Header = () => {

    const [userControl, setUserControl] = useState(false);
    const [toggle, setToggle] = useState(false);

    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {

    }

    //const isRole = useRole();
    //console.log(isRole);

    const navItems = <>
        <li>HOme</li>
        <li>HOme</li>
    </>

    return (
        <div className="flex justify-between bg-base-100 md:px-10 font-['Segoe UI'] font-semibold">
            <div className="flex items-center">
                <div className="relative" onClick={() => setToggle(!toggle)}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        toggle && <div className="absolute left-0 top-10 lg:hidden z-20 border">
                            <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52 text-[17px]">
                                {navItems}
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex items-center">
                    <Image src="/home.svg" width={50} height={25} alt="asdf" />
                </div>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[17px]">
                    {user && navItems}
                    <Image className='' src="/home.svg" width={50} height={25} alt="asdf" />
                </ul>
            </div> */}
            <div className="flex items-center">
                {
                    !user && <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[17px]">
                            {navItems}
                        </ul>
                    </div>
                }
                <button className="btn btn-ghost btn-circle">
                    <Image src="/notification-icon.svg" alt="icon" width={20} height={20} />
                </button>
                {
                    user && <div className="relative" >
                        <label className="flex px-3 py-1 border rounded-md my-2 items-center ">
                            <div className="rounded-md bg-[#fa9052]">
                               <Image src="/profile.svg" width={35} height={25} alt="profile" />
                            </div>
                            <div className="flex flex-col pl-3">
                                <p className="text-[12px]">Welcome back,</p>
                                <p>{user?.displayName}</p>
                            </div>
                            <div className="pl-10" onClick={() => setUserControl(!userControl)}>
                                <FiChevronDown size={25}></FiChevronDown>
                            </div>
                            
                        </label>
                        {
                            userControl && <div className="absolute right-0 top-12 z-10">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md border w-52">
                                    <li><span>{user.email}</span></li>
                                    <li onClick={handleLogOut}><a>Sign Out</a></li>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
        // <div className="ml-0 lg:ml-[250px]">
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li><a>Item 1</a></li>
        //                     <li>
        //                         <a>Parent</a>
        //                         <ul className="p-2">
        //                             <li><a>Submenu 1</a></li>
        //                             <li><a>Submenu 2</a></li>
        //                         </ul>
        //                     </li>
        //                     <li><a>Item 3</a></li>
        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><a>Item 1</a></li>
        //                 <li tabIndex={0}>
        //                     <details>
        //                         <summary>Parent</summary>
        //                         <ul className="p-2">
        //                             <li><a>Submenu 1</a></li>
        //                             <li><a>Submenu 2</a></li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             <a className="btn">Button</a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Header;
//onClick={() => setUserControl(!userControl)}