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
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "b",
        title: "Web Development",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "c",
        title: "Mobile App Development",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "d",
        title: "Game Development",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "e",
        title: "AI & Machine Learning",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "f",
        title: "SEO / Digital Marketing",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
    {
        uuid: "g",
        title: "Quality Assurance",
        description:
            "We have experienced designers of the creative industry, who create futuristic modern design with smooth workflow and responsive layouts.",
    },
];

const OurServices = () => {
    return (
        <div className="our-services-area ptb-100">
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
                                Our developers and digital experts join hands to
                                provide you with the most efficient, standard
                                and convenient websites, applications and
                                strategies.
                            </p>
                            <p>
                                We believe in listening and providing the best
                                creative solutions meeting your requirements and
                                focusing on yielding maximum efficiency, growth
                                and traffic on all your digital platforms across
                                the globe. In simple terms, “You share, we
                                listen, implement and deliver”. Our developers
                                and digital experts join hands to provide you
                                with the most efficient, standard and convenient
                                websites, mobile applications, modern UI/UX
                                designs and marketingstrategies.
                            </p>
                            <p>
                                Utilize our professionals' knowledge to achieve
                                higher uptime, improved performance, faster case
                                resolution, and proactive issue avoidance and
                                prevention.
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
