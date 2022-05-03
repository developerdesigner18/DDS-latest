import Link from 'next/link';
import { LOGO_LIGHT, ADDRESS, MOBILE_NUMBER, EMAIL_ADDRESS,
    FACEBOOK_LINK, INSTAGRAM_LINK, LINKEDIN_LINK, TWITTER_LINK } from '../../utils/AppConfig';
import { currentYear } from '../../utils/utils';

const Footer = () => {
    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link href="/">
                                <a className="logo">
                                    <img src={LOGO_LIGHT} alt="logo" width='100px' />
                                </a>
                            </Link>
                            <p>
                                Boost your digital presence with us, from developing, 
                                publishingto marketing we’ll take care of all your
                                needs. Our team is expert in making your websites 
                                andapplications rank better and attract organic 
                                audiences.
                            </p>
                            <ul className="social-link">
                                <li>
                                    <a href={FACEBOOK_LINK} className="d-block" target="_blank">
                                        <i className='bx bxl-facebook'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={TWITTER_LINK} className="d-block" target="_blank">
                                        <i className='bx bxl-twitter'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={INSTAGRAM_LINK} className="d-block" target="_blank">
                                        <i className='bx bxl-instagram'></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={LINKEDIN_LINK} className="d-block" target="_blank">
                                        <i className='bx bxl-linkedin'></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/about-us-1">
                                        <a>About us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/portfolio-1">
                                        <a>Portfolio</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Client Testimonials</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Career</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>FAQ</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Life at DDS</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Resources</h3>
                            <ul className="footer-links-list">
                                <li>
                                    <Link href="/team-1">
                                        <a>Working Progress</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Our Services</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services-1">
                                        <a>Our Partners</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq">
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>Blog</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>
                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    {ADDRESS}
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href={`tel:+91${MOBILE_NUMBER}`}>+(91) {MOBILE_NUMBER}</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:contact@daydreamsoft.com">{EMAIL_ADDRESS}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i> {currentYear} <strong>Daydreansoft LLP</strong> | All Rights Reserved</p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/privacy-policy">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms-of-service">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;