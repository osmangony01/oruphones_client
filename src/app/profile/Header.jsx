'use client'
import { AuthContext } from '@/context/AuthProvider';
import { useContext, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

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
        <div className="navbar bg-base-100 md:px-10 font-['Segoe UI'] font-semibold">
            <div className="navbar-start">
                <div className="relative" onClick={() => setToggle(!toggle)}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        toggle && <div className="absolute left-0 top-10 lg:hidden z-20">
                            <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md w-52 text-[17px]">
                                {navItems}
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex items-center">
                    <img src="/images/logo2.png" alt="asdf" />
                    <a className="btn btn-ghost normal-case text-xl md:text-2xl">WorldSpeak</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[17px]">
                    {user && navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user && <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[17px]">
                            {navItems}
                        </ul>
                    </div>
                }
                {
                    user && <div className="relative" onClick={() => setUserControl(!userControl)}>
                        <label className="btn btn-ghost btn-circle avatar m-0">
                            <div className="w-10 rounded-full">
                                {user.photoURL ? <img src={user.photoURL} alt="" className='bg-slate-200' title={user.displayName} />
                                    : <span className='first-line:' title={user.displayName}><FaUserCircle size={40}></FaUserCircle></span>}
                            </div>
                        </label>
                        {
                            userControl && <div className="absolute right-0 top-10 z-10">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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