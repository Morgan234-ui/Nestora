import React from 'react'
import SmallArrowDown from '@/lib/svg/SmallArrowDown'
import SmallArrowUp from '@/lib/svg/SmallArrowUp'
import Search from '@/lib/svg/Search'

const HeaderQuery = () => {
    return (
        <React.Fragment>
             <form className='hquery-form'>
                                <div className="header-query-form-top">
                                    <div className="hquery-input-con">
                                        <input type="text" name="property-type" id="property-type" placeholder='Property type' />
                                    </div>
                                    <div className="hquery-input-con">
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
                                                            100,000 - 150,000
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,000 - 200,000
                                                        </li><li className='hquery-input-item'>
                                                            100,000 - 150,000
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,000 - 200,000
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="hquery-input-con"> 
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
                                                            100,000 - 150,000
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,000 - 200,000
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="hquery-input-con">
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
                                                            100,000 - 150,000
                                                        </li>
                                                        <li className='hquery-input-item'>
                                                            150,000 - 200,000
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="search-btn-round">
                                        <Search />
                                    </div>
                                </div>
                                {/* <div className="hquery-form-bottom">
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
                                </div> */}
                            </form>
        </React.Fragment>
    )
}

export default HeaderQuery