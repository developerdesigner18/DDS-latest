import CareerAccordian from "../components/Common/Career/CareerAccordian";
import PageBanner from "../components/Common/PageBanner/PageBanner";

const Career = () => {
    const accordionData = [
        {
            id: "1",
            title: "Wordpress Developer",
            content: (
                <>
                    <h6>
                        Number of Positions : 2 <br />
                        Required Experience : 1-2 Years
                    </h6>
                    <h5>Job Brief</h5>
                    <p>
                        We are looking to hire a skilled WordPress Frontend
                        Developer to implement attractive and functional
                        websites for our clients. You will be responsible for
                        both implementation of WordPress themes and plugins as
                        well as site integration and security updates.
                    </p>
                    <h5>Job Responsibilities</h5>
                    <ul>
                        <li> Implementing new features and functionality </li>

                        <li>
                            {" "}
                            Establishing and guiding the website’s architecture
                        </li>

                        <li>
                            {" "}
                            Ensuring high-performance and availability, and
                            managing all technical aspects of the CMS
                        </li>

                        <li>
                            {" "}
                            Helping formulate an effective, responsive design
                            and turning into working theme and plugin
                        </li>

                        <li> optimize applications for maximum speed</li>

                        <li> optimize applications for maximum scalability</li>

                        <li>
                            {" "}
                            help back-end developers with coding and
                            troubleshooting
                        </li>
                    </ul>
                    <h5>Requirements</h5>
                    <ul>
                        <li>
                            {" "}
                            Good understanding of front-end technologies,
                            including HTML5, CSS3, JavaScript, jQuery{" "}
                        </li>

                        <li>
                            {" "}
                            Experience building user interfaces for websites
                            and/or web applications
                        </li>

                        <li>
                            {" "}
                            Experience developing responsive design websites
                        </li>

                        <li>
                            {" "}
                            Comfortable working with debugging tools like
                            Firebug, Chrome inspector, etc.
                        </li>

                        <li>
                            {" "}
                            Ability to understand CSS changes and their
                            ramifications to ensure consistent style across
                            platforms and browsers
                        </li>

                        <li>
                            {" "}
                            Ability to convert comprehensive layout and
                            wireframes into working HTML pages
                        </li>

                        <li>
                            {" "}
                            Knowledge of how to interact with RESTful APIs and
                            formats (JSON, XML). – must have
                        </li>

                        <li>
                            {" "}
                            A high level of experience with UI layouts, SASS,
                            LESS, Bootstrap, and the CSS GRID system
                        </li>

                        <li>
                            {" "}
                            Proficient understanding of code versioning tools
                            (such as Git, SVN, and Mercurial)
                        </li>

                        <li> Understanding of PHP back-end development</li>

                        <li>
                            {" "}
                            Understanding of WordPress Structure and Plugins
                        </li>

                        <li> Exposure with Woo-Commerce Projects</li>

                        <li>
                            {" "}
                            Experience on WordPress multi network and
                            Multi-lingual sites{" "}
                        </li>

                        <li> 3rd Party integration on WordPress sites</li>

                        <li>
                            {" "}
                            Candidate Should have Experience with Diverse Set of
                            Themes. Like X-Theme, Astra, Avada, Bridge, Divi,
                            Engage, GeneratePress
                        </li>
                    </ul>
                </>
            ),
        },
        {
            id: "2",
            title: "React Native Developer",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
        },
        {
            id: "3",
            title: "PHP Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "4",
            title: "Laravel Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "5",
            title: "Mean/Mern Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "6",
            title: "UX / UI Designer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "7",
            title: "Flutter Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "8",
            title: "Python Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
    ];

    return (
        <>
            <PageBanner pageTitle="Career" />

            <div className="accordion-main">
                <div className="career-position container">
                    <h3>Opening Positions</h3>
                    <div className="col-lg-12 col-sm-7 col-md-7">
                        <div className="career-option">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Job Title"
                                name="coupon-code"
                                id="coupon-code"
                            />
                            <select>
                                <option>Job Category</option>
                                <option>React Native</option>
                                <option>PHP Developer</option>
                                <option>Laravel</option>
                            </select>
                            <button type="submit">Search Job</button>
                        </div>
                    </div>
                </div>
                {accordionData.map((elm) => {
                    return (
                        <>
                            <div className="container">
                                <CareerAccordian
                                    key={elm.id}
                                    title={elm.title}
                                    content={elm.content}
                                />
                            </div>
                        </>
                    );
                })}
                <div className="career-info container">
                    <p>
                        To know more about other amazing opportunities, email us
                        at
                        <span> contact@daydreamsoft.com</span>
                    </p>
                    <p>
                        Get a taste of what it’s like to work with Daydreamsoft.
                        Find out what <span> Life at Daydreamsoft </span> is all
                        about! Visit our
                        <span> LinkedIn profile</span> to know about the latest
                        from our turf
                    </p>
                </div>
            </div>
        </>
    );
};

export default Career;
