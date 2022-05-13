const history = [
    {
        year: '2018',
        date: 'January 1',
        title: 'Founded',
        description: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        image: '/images/history/history-img1.jpg'
    },
    {
        year: '2019',
        date: 'January 4',
        title: 'Founded',
        description: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        image: '/images/history/history-img2.jpg'
    },
    {
        year: '2020',
        date: 'January 4',
        title: 'Founded',
        description: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        image: '/images/history/history-img3.jpg'
    },
    {
        year: '2022',
        date: 'January 4',
        title: 'Founded',
        description: 'Real innovations and a positive customer experience are the heart of successful communication. Lorem ipsum dolor sit amet, sectetur adipiscing elit, tempor incididunt ut labore et dolore magna.',
        image: '/images/history/history-img4.jpg'
    },
]

const OurHistory = () => {
    return (
        <div className="history-area ptb-100 bg-f9f9f9">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our History</span>
                    <h2>History Begins In 2018</h2>
                </div>

                <ol className="timeline history-timeline">
                    {
                        history.map(({year, date, title, description, image }, index) => (
                            <li key={index} className="timeline-block">
                                <div className="timeline-date">
                                    <span>{year}</span>
                                    {date}
                                    <sup>st</sup>
                                </div>

                                <div className="timeline-icon">
                                    <span className="dot-badge"></span>
                                </div>

                                <div className="timeline-content">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="content">
                                                <h3>{title}</h3>
                                                <p>{description}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-12">
                                            <div className="image">
                                                <img src={image} alt="image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

export default OurHistory;