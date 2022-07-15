import Link from "next/link";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { users } from "../../data/users";

const UserPortfolio = () => {
    return (
        <>
            <Tabs className="ptb-100 porfolio-holder">
                <TabList className="container tab-list">
                    <Tab>All</Tab>
                    <Tab>Website</Tab>
                    <Tab>Mobile Applications</Tab>
                    <Tab>Game Applications</Tab>
                </TabList>
                <TabPanel className="all-tab">
                    <div className="portfolio-area">
                        <div className="container">
                            <div className="row">
                                {users.map((elm) => {
                                    return (
                                        <>
                                            <div className="col-lg-4 col-md-6 col-sm-6">
                                                <div className="single-portfolio-box">
                                                    <Link href="/single-portfolio">
                                                        <a className="image d-block">
                                                            <img
                                                                src={
                                                                    elm.userImg
                                                                }
                                                                alt="image"
                                                            />
                                                        </a>
                                                    </Link>

                                                    <div className="content">
                                                        <p>{elm.content}</p>

                                                        <Link href="/portfolioview">
                                                            <a className="link-btn">
                                                                <i className="flaticon-next-button"></i>
                                                            </a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                            </div>
                            <Link href="/portfolioview">
                                <span className="default-btn portfolio">
                                    View More
                                </span>
                            </Link>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="container">Website...</div>
                </TabPanel>
                <TabPanel>
                    <div className="container">Mobile Applications....</div>
                </TabPanel>
                <TabPanel>
                    <div className="container">Game Applications....</div>
                </TabPanel>
            </Tabs>
        </>
    );
};

export default UserPortfolio;
