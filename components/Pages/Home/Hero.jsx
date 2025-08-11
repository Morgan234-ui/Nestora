
import React from 'react'
import SmallArrow from '@/lib/svg/SmallArrow'
import SmallArrowDown from '@/lib/svg/SmallArrowDown'
import SmallArrowUp from '@/lib/svg/SmallArrowUp'
import Hquery from '@/components/Utilities/Search/Filter/Hquery'

const Hero = () => {
    return (
        <React.Fragment>
            <section className="hero">
                <div className="hero-bg">
                    <div className="bg-image">
                        <img src="/assets/images/properties/15.jpg" alt="" />
                    </div>
                    <div className="bg-text">
                        <div className="bg-text-top">
                            <a href="">Commercial</a>
                            <a href="">Residential</a>
                            <a href="">Lands</a>
                        </div>
                        <div className="bg-text-mid">
                            <h1>Build Your Future, One Property at a Time.</h1>
                            <p>Own Your World, One Property at a Time. Own Your World, One Property at a Time. 
                                Own Your World, One Property at a Time. Own Your World, One Property at a Time.</p>
                        </div>
                        <div className="bg-text-bottom">
                            <h2>Find The Best Place</h2>
                           <Hquery />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Hero