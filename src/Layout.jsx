
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ShorterLink from './Pages/Home/Shorter_links';
import Inputfield from './Pages/Home/Inputfield';
import Statics from './Pages/Home/Statics';
import Boost_links from './Pages/Home/Boost_links';
import Shorting_url from './Components/Shorting_url/Shorting_url';

function Layout(props) {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <div className="">
                    <Navbar />
                </div>
                <div>
                    <ShorterLink/>
                    <Inputfield/>
                    <Shorting_url/>
                    <Statics/>
                    <Boost_links/>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Layout;