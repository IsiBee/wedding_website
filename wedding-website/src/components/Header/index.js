import React, { useState } from 'react';
import Nav from '../Navigation';
import About from '../About';
import RSVP from '../RSVP';
import OurStory from '../Our Story';
import Photos from '../Photos';
import Registry from '../Registry';
import ThingsToDo from '../Things To Do';
import Travel from '../Travel';
import WeddingParty from '../Wedding Party';

function Header() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch (currentPage) {
            case 'Our Story':
                return <OurStory />
            case 'Photos':
                return <Photos />
            case 'Registry':
                return <Registry />
            case 'Things To Do':
                return <ThingsToDo />
            case 'Travel':
                return <Travel />
            case 'Wedding Party':
                return <WeddingParty />
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