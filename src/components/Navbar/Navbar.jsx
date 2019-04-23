import React from 'react';
import './Navbar.css';
import moviePic from '../../assets/owli.png';

var navStyles = {
    nav: {
        margin: '0',
        backgroundColor: 'black',
        color: 'goldenrod',
        height: '10vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'spaceBetween',
        zIndex: '2',
    },


    img: {
        height: '100%',
        backgroundColor: 'goldenrod',
        opacity: '0.25',
        borderRadius: '50%',
        zIndex: '2',
        position: 'relative',
        left: '20px',
    }
}






const Navbar = (props) => {
    return (
        <nav style={navStyles.nav}>
            <img className="nav-img"src={moviePic} alt="Movie" />
            <h1 color="gold"></h1>
        </nav>
    )
}

export default Navbar;
