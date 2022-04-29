import React from 'react';
import ProductsDetailsTabs from './ProductsDetailsTabs';

const ProductsDetailsContent = () => {
    return (
        <>
            <div className="products-details-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-12">
                            <div className="products-details-image">
                                <img src="/images/products/products-img1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-12">
                            <div className="products-details-desc">
                                <h3>Motivational Book Cover</h3>

                                <div className="price">
                                    <span className="new-price">$200</span>
                                    <span className="old-price">$210</span>
                                </div>

                                <div className="products-review">
                                    <div className="rating">
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star'></i>
                                        <i className='bx bxs-star-half'></i>
                                    </div>
                                    <a href="#" className="rating-count">3 reviews</a>
                                </div>

                                <p>Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried near the Pyramids. Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt et.</p>

                                <div className="products-meta">
                                    <span>SKU: <span className="sku">10</span></span>
                                    <span>Availability: <span className="in-stock">In Stock</span></span>
                                    <span>Category: <a href="#">Business</a></span>
                                    <span>Tag: <a href="#">Book</a></span>
                                </div>

                                <div className="products-add-to-cart">
                                    <div className="input-counter">
                                        <input type="number" defaultValue="1" />
                                    </div>
                                    <button type="submit" className="default-btn">Add to Cart</button>
                                </div>

                                <div className="products-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <a href="https://www.facebook.com/" className="facebook" target="_blank">
                                                <i className='bx bxl-facebook'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" className="twitter" target="_blank">
                                                <i className='bx bxl-twitter'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/" className="linkedin" target="_blank">
                                                <i className='bx bxl-linkedin'></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" className="instagram" target="_blank">
                                                <i className='bx bxl-instagram'></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <ProductsDetailsTabs />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
    
export default ProductsDetailsContent;