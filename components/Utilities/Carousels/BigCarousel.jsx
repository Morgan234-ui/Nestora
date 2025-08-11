import BookmarkDash from '@/lib/svg/BookmarkDash'
import SmallArrowRight from '@/lib/svg/SmallArrowRight'
import React from 'react'

const BigCarousel = () => {
    return (
        <React.Fragment>
            <section className="big-carousel">
                <div className="big-carousel-thumbnail">
                    <div className="big-carousel-thumbnail-item">
                        <div className="big-carousel-thumbnail-image">
                            <img src="/assets/images/properties/1.jpg" alt="#" />
                        </div>
                        <div className="big-carousel-thumbnail-text">
                            <h3>First House</h3>
                            <p>This is The First House</p>
                        </div>
                    </div>
                    <div className="big-carousel-thumbnail-item">
                        <div className="big-carousel-thumbnail-image">
                            <img src="/assets/images/properties/2.jpg" alt="#" />
                        </div>
                        <div className="big-carousel-thumbnail-text">
                            <h3>Second House</h3>
                            <p>This is The Second House</p>
                        </div>
                    </div>
                    <div className="big-carousel-thumbnail-item">
                        <div className="big-carousel-thumbnail-image">
                            <img src="/assets/images/properties/3.jpg" alt="#" />
                        </div>
                        <div className="big-carousel-thumbnail-text">
                            <h3>Third House</h3>
                            <p>This is The Third House</p>
                        </div>
                    </div>
                    <div className="big-carousel-thumbnail-item">
                        <div className="big-carousel-thumbnail-image">
                            <img src="/assets/images/properties/4.jpg" alt="#" />
                        </div>
                        <div className="big-carousel-thumbnail-text">
                            <h3>Fourth House</h3>
                            <p>This is The Fourth House</p>
                        </div>
                    </div>
                </div>
                <div className="big-carousel-slide">
                    <div className="big-carousel-slide-image">
                        <img src="/assets/images/properties/5.jpg" alt="#" />
                    </div>
                    <div className="big-carousel-slide-text">
                        <div className="big-carousel-slide-text-header">
                            <h2>201 Prague Dr, San Jose, CA 95119</h2>
                            <BookmarkDash />
                        </div>
                        <div className="big-carousel-slide-text-body">
                            <div className="big-carousel-slide-text-body-info">
                                <div>
                                    <label>4</label>
                                    <p>beds</p>
                                </div>
                                <div>
                                    <label>3</label>
                                    <p>beds</p>
                                </div>
                                <div>
                                    <label>1,868</label>
                                    <p>sqft</p>
                                </div>
                            </div>
                            <div className="big-carousel-slide-text-body-pricing">
                                <label className="big-carousel-slide-text-body-pricing-label">$1,650,000</label>
                                <div className="white-btn-border">
                                    <label>Splite Options</label>
                                    <SmallArrowRight />
                                </div>
                            </div>
                            <div className="big-carousel-slide-text-body-contact">
                                <div className="big-carousel-slide-text-body-contact-top">
                                    <div className='big-carousel-slide-text-body-contact-top-image'>
                                        <img src="/assets/images/properties/6.jpg" alt="" />
                                    </div>
                                    <label>Amelia Stephenson</label>
                                </div>
                                <div className="big-carousel-slide-text-body-contact-bottom">
                                    <p>Agent</p>
                                    <a href="#" className="white-btn-border">Contact</a>
                                </div>
                            </div>
                            <div className="big-carousel-slide-text-body-tour pointer">
                                <label className='pointer'>Request a tour</label>
                                <p className='pointer'>Earliest at 11:00 tomorrow</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default BigCarousel