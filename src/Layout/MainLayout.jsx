
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <header className='sticky top-0 z-50'>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>

            </footer>

        </div>
    );
};

export default MainLayout;