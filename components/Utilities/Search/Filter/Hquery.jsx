import React from 'react'
import SmallArrowDown from '@/lib/svg/SmallArrowDown'
import SmallArrowUp from '@/lib/svg/SmallArrowUp'

const Hquery = () => {
    return (
        <React.Fragment>
            <form className='hquery-form'>
                                <div className="hquery-form-top">
                                    <div className="hquery-input-con">
                                        <label>Looking For</label>
                                        <input type="text" name="property-type" id="property-type" placeholder='Enter type' />
                                    </div>

                                    <div className="hquery-input-con">
                                        <label>Locations</label>
                                        <div className='hquery-input'>
                                            <div className="hquery-input-div-con">
                                                <div className="hquery-div-input">Price</div>
                                                <span className='hquery-input-span'>
                                                    <SmallArrowUp />
                                                    <SmallArrowDown />
                                                </span>
                                            </div>
                                            <div className="hquery-input-dropdown">
                                                <div className="hquery-input-dropdown-con">
                                                    <ul className='hquery-input-list'>
                                                        <li className='hquery-input-item'>
                                                            100,00 - 150,00
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,00 - 200,00
                                                        </li><li className='hquery-input-item'>
                                                            100,00 - 150,00
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,00 - 200,00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hquery-input-con">
                                        <label>Price</label>
                                        <div className='hquery-input'>
                                            <div className="hquery-input-div-con">
                                                <div className="hquery-div-input">Select Location</div>
                                                <span className='hquery-input-span'>
                                                    <SmallArrowUp />
                                                    <SmallArrowDown />
                                                </span>
                                            </div>
                                            <div className="hquery-input-dropdown">
                                                <div className="hquery-input-dropdown-con">
                                                    <ul className='hquery-input-list'>
                                                        <li className='hquery-input-item'>
                                                            100,00 - 150,00
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,00 - 200,00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hquery-input-con">
                                        <label>Apartment size</label>
                                        <div className='hquery-input'>
                                            <div className="hquery-input-div-con">
                                                <div className="hquery-div-input">2 bedrooms</div>
                                                <span className='hquery-input-span'>
                                                    <SmallArrowUp />
                                                    <SmallArrowDown />
                                                </span>
                                            </div>
                                            <div className="hquery-input-dropdown">
                                                <div className="hquery-input-dropdown-con">
                                                    <ul className='hquery-input-list'>
                                                        <li className='hquery-input-item'>
                                                            100,00 - 150,00
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,00 - 200,00
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                                </div>
                                
                                <div className="hquery-form-bottom">
                                    <div className="filter">
                                        <div className="filter-label">Filter:</div>
                                        <div className="filter-list">
                                            <div className={`filter-item filter-active`}>
                                                Rural
                                            </div>
                                            <div className={`filter-item`}>
                                                Urban
                                            </div>
                                            <div className={`filter-item`}>
                                                Commercial
                                            </div>
                                            <div className={`filter-item`}>
                                                Residential
                                            </div>
                                            <div className={`filter-item`}>
                                                Lands
                                            </div>
                                        </div>
                                    </div>
                                    <input className='input-submit' type="submit" value="Search Properties" />
                            </div>
            </form>
        </React.Fragment>
    )
}

export default Hquery