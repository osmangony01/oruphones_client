import Link from 'next/link';
import React from 'react';

import { FiChevronRight } from "react-icons/fi";

const Sidebar = () => {
    return (

        <aside className="w-[250px] h-screen fixed bg-white hidden lg:flex lg:flex-col">

            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-semibold border px-6 py-1.5 mt-5 rounded-md drop-shadow-sm">Dashboard</h1>

               <div className="my-5 flex items-center justify-center"> <span className="mt-4 mr-6"><FiChevronRight></FiChevronRight></span> <button className='text-xl  border px-8 py-1.5 mt-5 rounded-md'> <Link href="/profile">My Profile</Link></button></div>
               <div className="flex items-center justify-center"><span className="mt-4 mr-4"><FiChevronRight></FiChevronRight></span>  <button className='text-xl  border px-4 py-1.5 mt-5 rounded-md'><Link href="/profile/connections">My connection</Link></button></div>
            </div>

        </aside>
    );
};

export default Sidebar;