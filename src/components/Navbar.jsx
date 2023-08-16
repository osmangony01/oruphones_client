'use client'

import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useContext } from 'react';
import { useRouter } from 'next/navigation'

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const router = useRouter();

    const handleLogOut = async () => {
        try {
            await logOut();
            router.push('/');
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <nav className="flex justify-between items-center py-5 px-5 container mx-auto">
            <h1 className="text-2xl font-semibold">Welcome</h1>
            <ul className="flex items-center justify-center">
                {/* {
                    navItems.map(({ path, title }) => <li key={path} className="mx-2">
                        <Link href={path}>{title}</Link>
                    </li>)
                } */}
                <li className="mx-2"><Link href="/">Home</Link></li>
                <li className="mx-2"><Link href="/about">About</Link></li>
                <li className="mx-2"><Link href="/contact">Contact</Link></li>
                {!user && <li className="mx-2"><Link href="/login">Sign In</Link></li>}
                {user && <li className="mx-2"><Link href="/profile">Profile</Link></li>}
                {user && <li className="mx-2"><button onClick={handleLogOut}>Sign Out</button></li>}

            </ul>
        </nav>
    );
};

export default Navbar;

{/* <nav className="flex justify-between px-20 bg-purple-200 py-5">
    <h1 className="text-2xl font-semibold">OruPhones</h1>
    <div className="">
        <a className='pl-3'>Home</a>
        <a className='pl-3'>About</a>
        <a className='pl-3'>Contact</a>
        <a className='pl-3'>Sign In</a></div>
</nav> */}