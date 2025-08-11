'use client'

import Globe from '@/lib/svg/Globe'
import Sun from '@/lib/svg/Sun'
import Moon from '@/lib/svg/Moon'
import Menu from '@/lib/svg/Menu'
import React, { useState } from 'react'
import HeaderQuery from '../Utilities/Search/HeaderQuery'

const HeaderRest = () => {
    const [mode,setMode] = useState("light")
    return (
        <React.Fragment>
            <header>
                <section className="header-rest">
                    <section className="header header-rest-text">
                    <section className="header-left"><div className="logo">Nes<span>tora</span></div></section>
                    <section className="header-mid">
                        <nav className="header-nav">
                            <a href="" className='header-nav-active'>Home</a>
                            <a href="">About Us</a>
                            <a href="">Property List</a>
                            <a href="">Contact Us</a>
                        </nav>
                    </section>
                    <section className="header-right">
                        <div className="user-pref">
                            <div className="become-seller">Become a realtor</div>
                                    <div className="toggle-menu">
                                        {
                                            mode == "light" ? <Sun /> : <Moon />
                                        }
                                    </div>
                            <div className="menu">
                                <Menu />
                                <div className="menu-dropdown">
                                    <div className="menu-dropdown-con">
                                        <div className="menu-list">
                                            <div className="lang">
                                                <Globe />
                                                <label>
                                                    Eng
                                                </label>
                                            </div>
                                            <a href="" className="signin">Signup</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <section className="search-bottom-section">
                        <HeaderQuery />
                    </section>
                </section>
                
            </header>
        </React.Fragment>
    )
}

export default HeaderRest