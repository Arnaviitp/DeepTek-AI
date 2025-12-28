import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-blue-500/30">
            <Navbar />
            <main className="pt-24 min-h-[calc(100vh-400px)]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
