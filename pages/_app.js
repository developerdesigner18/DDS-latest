import "../public/css/bootstrap.min.css";
import "../public/css/animate.min.css";
import "../public/css/boxicons.min.css";
import "../public/css/flaticon.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "react-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
// Global Styles
import "../public/css/style.scss";
import "../public/css/responsive.scss";
// Component styles
import "../components/_App/Navbar/Navbar.scss";
import "../components/_App/Footer/Footer.scss";
import "../components/_App/GoTop/GoTop";
// Home
import "../components/Home/MainBanner/MainBanner.scss";
import "../components/Home/OurServices/OurServices.scss";
import "../components/Home/OurProcess/OurProcess.scss";
import "../components/Home/IndsustriesWeServe/IndustriesWeServe.scss";
import "../components/Home/Portfolio/Portfolio.scss";
import "../components/Home/Testimonial/Testimonial.scss";
import "../components/Home/Partners/Partners.scss";
// About
import "../components/About/AboutContent/AboutContent.scss";
import "../components/About/OurHistory/OurHistory.scss";
import "../components/About/WhyDDS/WhyDDS.scss";
import "../components/About/OurMission/OurMission.scss";
import "../components/About/OurVision/OurVision.scss";
import "../components/About/GrowWithUs/GrowWithUs.scss";
// Services
// Pricing
// Portfolio
// Blog
// Contact

import Layout from "../components/_App/Layout/Layout";

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};

export default MyApp;
