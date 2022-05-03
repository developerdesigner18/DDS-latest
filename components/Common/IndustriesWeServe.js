import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const industries = [
    {
        image: '/images/industries/e-commerce.png',
        title: 'E-Commerce'
    },
    {
        image: '/images/industries/b2b.png',
        title: 'Business to Business'
    },
    {
        image: '/images/industries/non-profit.png',
        title: 'Non-Profit'
    },
    {
        image: '/images/industries/startup.png',
        title: 'Startup'
    },
]

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 4,
        }
    }
};

const IndustriesWeServe = () => {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="industries-we-serve ptb-100">
            <div className="container">
                <div className="section-title">
                    <h2>Industries We Serve</h2>
                    <p>
                        Our developers and digital experts join hands to provide
                        you with the most efficient, standard and convenient websites, applications and strategies.
                    </p>
                </div>

                {display ? <OwlCarousel 
                    className="industries-slides owl-carousel owl-theme"
                    {...options}
                >
                    {
                        industries.map(({image, title}, index) => (
                            <div key={index} className="single-industry">
                                <div className="image">
                                    <img src={image} alt="team-image" />
                                </div>

                                <div className="content">
                                    <span>{title}</span>
                                </div>
                            </div>
                        ))
                    }
                    
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default IndustriesWeServe;