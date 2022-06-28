// import { Router } from "express";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const GoTop = ({ scrollStepInPx, delayInMs }) => {
    const router = useRouter();
    const [thePosition, setThePosition] = useState(false);
    const [changeColor, setChangeColor] = useState({
        color: "",
    });
    console.log("router", router.pathname);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true);

                console.log("router.pathname === ", router.pathname === "/");
                if (router.pathname === "/about") {
                    console.log("aboutttt");
                    if (
                        document
                            .getElementsByClassName("go-top")[0]
                            .getBoundingClientRect().top +
                            10 >
                        document
                            .getElementsByClassName("footer-area")[0]
                            .getBoundingClientRect().top
                    ) {
                        setChangeColor({ color: "white" });
                    } else {
                        console.log("3");
                        setChangeColor({ color: "blue" });
                    }
                    setChangeColor({ color: "red" });
                } else {
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
                }
            } else {
                setThePosition(false);
                setChangeColor({ color: "red" });
            }
        });
    }, [router.pathname]);

    const onScrollStep = () => {
        if (window.pageYOffset === 0) {
            clearInterval(timeoutRef.current);
        }
        window.scroll(0, window.pageYOffset - scrollStepInPx);
    };

    const scrollToTop = () => {
        timeoutRef.current = setInterval(onScrollStep, delayInMs);
    };

    const renderGoTopIcon = () => {
        return (
            <div
                className={`go-top ${thePosition ? "active" : ""}`}
                onClick={scrollToTop}
                style={{ background: changeColor.color }}
            >
                <i className="bx bx-up-arrow-alt"></i>
            </div>
        );
    };

    return <>{renderGoTopIcon()}</>;
};

export default GoTop;
