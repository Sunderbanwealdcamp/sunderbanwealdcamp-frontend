'use client'
import { useState } from 'react';

export default function Header() {
    const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
    return (
        <div className="header">
            <div className="wrapper">
                <div className="hcolL">
                    <span className="material-symbols-outlined">home</span>
                    <p>Bali 9, Bali Hatkhola, Gosaba, South 24 Pgs, West Bengal 743370, India.</p>
                </div>
                <div className="hcolM">
                    <a href="/">
                        <img src="img/logo.png" className="logo" alt="" />
                    </a>
                </div>
                <div className="hcolR">
                    <h3>
                        9007627990 
                        <span>9903355699</span>
                    </h3>
                    <a href="/contact" className="btn-sm">Bok Now</a>
                    <span className="material-symbols-outlined showMob" onClick={()=>ToggleMenu()} >menu</span>
                </div>
            </div>
            <menu className={`hMenu ${showMenu?'':'showmenu'}`}>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/aboutsunderban">About Sunderban</a>
                {/* <a href="/accommodation ">Accommodation </a> */}
                <a href="/tourpackage ">Tour Package </a>
                <a href="/ouractivities">Our Activities</a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
                <a href="/faq">FAQ</a>
            </menu>
        </div>
    )
}