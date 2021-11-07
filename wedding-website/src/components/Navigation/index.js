import React from 'react';

function Nav(props) {
    const navlinks = ['Home', 'Our Story', 'Travel', 'Things to Do', 'Wedding Party', 'Photos', 'Registry', 'RSVP'];
    return (
        <ul className="nav nav-tabs justify-content-end">
            {navlinks.map(link => (
                <li className="nav-item" key={link}>
                    <a
                        href={'#' + link.toLowerCase()}
                        onClick={() => props.handlePageChange(link)}
                        className={
                            props.currentPage === link ? 'nav-link active' : 'nav-link'
                        }
                    >
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Nav;