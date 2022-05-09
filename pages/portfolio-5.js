import React from 'react';
import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/_App/Footer';
import Link from 'next/link';

const PortfolioFive = () => {
    return (
        <>
			<Navbar />
            
			<PageBanner 
                pageTitle="Portfolio 3 Columns" 
            />  
			
            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img1.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Movie Recommendation</a>
                                        </Link>
                                    </h3>
                                    <span>System Project</span>

                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img2.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Customer Segmentation</a>
                                        </Link>
                                    </h3>
                                    <span>Machine Learning</span>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img3.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Data Analysis</a>
                                        </Link>
                                    </h3>
                                    <span>Web Project</span>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img4.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Detection Project</a>
                                        </Link>
                                    </h3>
                                    <span>Programming</span>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img5.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Data Scientist</a>
                                        </Link>
                                    </h3>
                                    <span>Data Science</span>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link href="/single-portfolio">
                                    <a className="image d-block">
                                        <img src="/images/portfolio/portfolio-img6.jpg" alt="image" />
                                    </a>
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link href="/single-portfolio">
                                            <a>Benefits Research</a>
                                        </Link>
                                    </h3>
                                    <span>Science Projects</span>
                                    
                                    <Link href="/single-portfolio">
                                        <a className="link-btn"><i className="flaticon-next-button"></i></a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</>
    )
}

export default PortfolioFive;