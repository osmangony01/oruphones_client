'use client'

import { useState, useContext } from 'react';
import { AuthContext } from '@/context/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

const Login = () => {

    const { user, signIn } = useContext(AuthContext);
    console.log(user);
    const router = useRouter();

    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        setError("")
        if (email === "" || password === "") {
            return;
        }
        try {
            await signIn(email, password)
            router.push('/');
        }
        catch (error) {
            setError("Incorrect Email or Password!");
            console.log(error)
        }
    }

    

    return (
        <div>
            <div className='pt-10 pb-16 bg-slate-100'>
                <div className='w-2/5 max-sm:w-11/12 max-md:w-3/4 max-lg:w-1/2 bg-white mx-auto py-10 px-12 max-sm:px-4 border border-slate-300 rounded-lg'>
                    <h3 className='text-center text-3xl font-semibold max-sm:text-2xl'>Login your account</h3>
                    <hr className='my-8' />
                    <p className='text-red-600 text-center text-sm mb-4'>{error}</p>
                    <form action="" className='px-4' onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <label htmlFor="" className='block mb-1.5'>Email</label>
                            <input type="email" name="email" className='input-control' placeholder='Enter your email' />
                        </div>
                        <div className='mb-3 relative'>
                            <label htmlFor="" className='block  mb-1.5'>Password</label>
                            <input type="password" name="password" className='input-control' placeholder='Enter your password' />
                        </div>
                        <button type="submit" className='w-full py-1 mt-4 hover:bg-slate-800 text-lg font-semibold text-white bg-slate-600 rounded'>Login</button>
                        <p className='mt-2 text-sm  text-slate-600 text-end'>You don`t have an account? <Link href="/register" className='text-orange-600'>Register</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;