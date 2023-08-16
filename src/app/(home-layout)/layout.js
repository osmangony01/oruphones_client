import Navbar from '@/components/Navbar';
import React from 'react';


const HomeLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>footer</footer>
        </div>
    );
};

export default HomeLayout;