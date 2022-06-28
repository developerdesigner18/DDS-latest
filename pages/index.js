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
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                // setThePosition(true);
                // const tagname = document.getElementsByTagName("div");
                // console.log(tagname, "classs");
                // var service =
                //     document.getElementsByClassName("our-services-area");
                // var servicePos = service.pageYOffset;
                // console.log("servicePos", servicePos);
                // if (window.scrollY > servicePos) {
                //     console.log("1");
                //     setChangeColor({ color: "white" });
                // } else {
                //     console.log("3");
                //     setChangeColor({ color: "blue" });
                // }
                // setChangeColor({ color: "white" });
                console.log(
                    "===---",
                    document
                        .getElementsByClassName("go-top")[0]
                        .getBoundingClientRect().top + 10
                );
                console.log(
                    "===--our-services-area-",
                    document
                        .getElementsByClassName("our-services-area")[0]
                        .getBoundingClientRect()
                );
                if (
                    document
                        .getElementsByClassName("go-top")[0]
                        .getBoundingClientRect().top +
                        10 >
                    document
                        .getElementsByClassName("our-services-area")[0]
                        .getBoundingClientRect().top
                ) {
                    setChangeColor({ color: "white" });
                    if (
                        document
                            .getElementsByClassName("go-top")[0]
                            .getBoundingClientRect().top +
                            10 >
                        document
                            .getElementsByClassName("how-its-work-area")[0]
                            .getBoundingClientRect().top
                    ) {
                        setChangeColor({ color: "blue" });
                        if (
                            document
                                .getElementsByClassName("go-top")[0]
                                .getBoundingClientRect().top +
                                10 >
                            document
                                .getElementsByClassName(
                                    "industries-we-serve"
                                )[0]
                                .getBoundingClientRect().top
                        ) {
                            setChangeColor({ color: "white" });
                        }
                    }
                } else {
                    console.log("3");
                    setChangeColor({ color: "blue" });
                }
            } else {
                // setThePosition(false);
                setChangeColor({ color: "red" });
            }
        });
    }, []);

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
