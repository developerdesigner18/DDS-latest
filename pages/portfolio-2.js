import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const PortfolioTwo = () => {
    return (
        <>
			<Navbar />
            
			<PageBanner 
                pageTitle="Portfolio 3 Columns" 
            />  

            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Customer Satisfaction for a Digital Marketing Agency</a>
                                        </Link>
                                    </h3>

                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Return on Investment for Various Digital Marketing</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Google Search Engine Marketing Case Study</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img4.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Analysis of New Product Launch Using Google</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img5.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Customer Satisfaction for a Digital Marketing Agency</a>
                                        </Link>
                                    </h3> 
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-portfolio-item">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img6.jpg" alt="image" />
                                    </a>
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Report on Tools to Analyze Digital Marketing Content</a>
                                        </Link>
                                    </h3>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn">
                                            <i className="flaticon-next-button"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers"><i className='bx bx-chevrons-left'></i></a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className='bx bx-chevrons-right'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioTwo;