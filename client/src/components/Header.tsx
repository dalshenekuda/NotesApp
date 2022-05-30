import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className='header__content'>
                <Link  className='logo' to='/'>NotesApp.</Link>
                <Link className='link' to="/" >List of notes</Link>
                <Link className='link' to="/add" >Add new note</Link>
            </div>

        </header>
    );
};

export default Header;