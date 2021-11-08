import React, { useState } from 'react';
import Nav from '../Navigation';
import About from '../About';
import RSVP from '../RSVP';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'RSVP':
                return <RSVP />

            default: return <About />
        }
    };
    return (
        <>
            <header>
                <span></span>
                <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            </header>
            <main>
                {renderPage()}

            </main>

        </>
    );
}

export default Header;