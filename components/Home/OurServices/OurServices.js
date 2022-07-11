import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
} from "react-accessible-accordion";

const accordionItems = [
    {
        uuid: "a",
        title: "UI/UX Design",
        description: (
            <p>
                We have experienced designers of the creative industry, who
                create futuristic modern designs with a smooth workflow and
                responsive layouts.{" "}
            </p>
        ),
    },
    {
        uuid: "b",
        title: "Web Development",
        description: (
            <p>
                From simple landing pages to complex e-commerce websites, we
                ‘Add’ value to the ‘Web’ world with our Experience and Expertise
                in Web Development Services.
            </p>
        ),
    },
    {
        uuid: "c",
        title: "Mobile App Development",
        description: (
            <p>
                With smartphone apps, the phrase "the world is in your hands"
                becomes rather literal. Regardless of the complexity of the
                application, we are experts at making it user-friendly,
                engaging, and seamless.
            </p>
        ),
    },
    {
        uuid: "d",
        title: "Game Development",
        description: (
            <p>
                Our game developers create the “trend” with their games as
                they’re always up-to-date with the latest games and have their
                logic and mind set up for making even the trickiest application
                rock on all marketplaces.{" "}
            </p>
        ),
    },
    {
        uuid: "f",
        title: "SEO",
        description: (
            <p>
                Our digital marketers are experts in making your websites and
                applications rank better and attract organic audiences.
            </p>
        ),
    },
    {
        uuid: "g",
        title: "Quality Assurance",
        description: (
            <p>
                What good is a product if it doesn't satisfy the standards of
                today's market? As a result, for your product to succeed, we use
                a very specific and rigorous testing technique to verify that
                they are of the highest quality possible.
            </p>
        ),
    },
];

const OurServices = () => {
    return (
        <div className="our-services-area ptb-100 dark-bg-color">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="our-services-content">
                            <span className="sub-title">Our Services</span>
                            <h2>
                                Sky Rocket your Business in the Digital World
                                with Us.
                            </h2>
                            <p>
                                We believe in listening and providing the best
                                creative solutions to meet your requirements and
                                focusing on yielding maximum efficiency, growth,
                                and traffic on all your digital platforms across
                                the globe. In simple terms, “You share, we
                                listen, implement and deliver”. Our developers
                                and digital experts join hands to provide you
                                with the most efficient, standard, and
                                convenient websites, mobile applications, modern
                                UI/UX designs, and marketing strategies.
                            </p>
                            <p>
                                Tap into the knowledge of our experts and
                                achieve more uptime, better performance, faster
                                case resolution, and proactive issue avoidance
                                and prevention.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="our-services-content-accordion">
                            <Accordion allowZeroExpanded preExpanded={["a"]}>
                                {accordionItems.map(
                                    ({ uuid, title, description }) => (
                                        <AccordionItem key={uuid} uuid={uuid}>
                                            <AccordionItemHeading>
                                                <AccordionItemButton>
                                                    <span>{title}</span>
                                                </AccordionItemButton>
                                            </AccordionItemHeading>
                                            <AccordionItemPanel>
                                                <p>{description}</p>
                                            </AccordionItemPanel>
                                        </AccordionItem>
                                    )
                                )}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
