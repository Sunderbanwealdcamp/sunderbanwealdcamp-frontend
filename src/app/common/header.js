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
                    <p>Dulki (Gosaba), South 24 Parganas, West Bengal, Pin: 743370</p>
                </div>
                <div className="hcolM">
                    <a href="/">
                        <img src="img/logo-header.png" alt="" />
                    </a>
                </div>
                <div className="hcolR">
                    <h3>+(91) 9007627990</h3>
                    <a href="/contact" className="btn-sm">Bok Now</a>
                    <span className="material-symbols-outlined showMob" onClick={()=>ToggleMenu()} >menu</span>
                </div>
            </div>
            <menu className={`hMenu ${showMenu?'':'showmenu'}`}>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/accommodation ">Accommodation </a>
                <a href="/gallery">Gallery</a>
                <a href="/contact">Contact</a>
            </menu>
        </div>
    )
}