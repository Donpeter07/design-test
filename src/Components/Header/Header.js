import React from 'react'
import "./Header.css"
import { BsSearch } from "react-icons/bs";

const Header = () => {
    return (
        <div className="header-main-parent">
            <div className="header-logo">
                <img src="logo.png" alt="" height={42} width={185} />
            </div>
            <div className="header-search">
                <div>
                    <input type="text" className='header-search-input' />
                </div>
                <div>
                    <BsSearch />
                </div>
            </div>
            <div className="header-profile-icon">
                <img src="profile.png" alt="" height={32} width={32} />
            </div>
            <div className="header-search-cart">
                <img src="cart.png" alt="" height={37} width={35} />
            </div>
        </div>
    )
}

export default Header