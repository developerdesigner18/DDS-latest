import MainBanner from "../components/Home/MainBanner/MainBanner";
import OurServices from "../components/Home/OurServices/OurServices";
import OurProcess from "../components/Home/OurProcess/OurProcess";
import IndustriesWeServe from "../components/Home/IndsustriesWeServe/IndustriesWeServe";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import Testimonial from "../components/Home/Testimonial/Testimonial";
import Partners from "../components/Home/Partners/Partners";
import Logos from "../components/Home/Partners/Logos";
import { useEffect, useState } from "react";

const Index = () => {
    const [thePosition, setThePosition] = useState(false);
    const [changeColor, setChangeColor] = useState({
        color: "",
    });
    // useEffect(() => {
    //     document.addEventListener("scroll", () => {
    //         if (window.scrollY > 170) {
    //             setThePosition(true);
    //         } else {
    //             setThePosition(false);
    //         }
    //     });
    // }, []);

    return (
        <>
            <MainBanner />

            <OurServices />

            <OurProcess />

            <IndustriesWeServe />

            <Portfolio />

            <Testimonial />

            <Partners />
        </>
    );
};

export default Index;
