// import { Router } from "express";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import React from "react";

const GoTop = ({ scrollStepInPx, delayInMs }) => {
    const router = useRouter();
    const [thePosition, setThePosition] = useState(false);
    const [changeColor, setChangeColor] = useState({
        background: "",
        color: "",
    });
    const timeoutRef = React.useRef(null);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                setThePosition(true);

                if (router.pathname !== "/") {
                    if (
                        // typeof window !== "undefined" &&
                        localStorage.getItem("theme") === "dark"
                    ) {
                        setChangeColor({
                            background: "white",
                            color: "#003e6b",
                        });
                    } else {
                        if (
                            document
                                .getElementsByClassName("go-top")[0]
                                .getBoundingClientRect().top +
                            10 >
                            document
                                .getElementsByClassName("footer-area")[0]
                                .getBoundingClientRect().top
                        ) {
                            setChangeColor({
                                background: "white",
                                color: "#003e6b",
                            });
                        } else {
                            setChangeColor({ background: "#003e6b" });
                        }
                    }
                }
                if (router.pathname === "/") {
                    if (
                        // typeof window !== "undefined" &&
                        localStorage.getItem("theme") === "dark"
                    ) {
                        setChangeColor({
                            background: "white",
                            color: "#003e6b",
                        });
                    } else {
                        if (
                            document.getElementsByClassName("our-services-area")
                                .length > 0 &&
                            document
                                .getElementsByClassName("go-top")[0]
                                .getBoundingClientRect().top +
                            10 >
                            document
                                .getElementsByClassName(
                                    "our-services-area"
                                )[0]
                                .getBoundingClientRect().top
                        ) {
                            setChangeColor({
                                background: "white",
                                color: "#003e6b",
                            });
                            if (
                                document
                                    .getElementsByClassName("go-top")[0]
                                    .getBoundingClientRect().top +
                                10 >
                                document
                                    .getElementsByClassName(
                                        "how-its-work-area"
                                    )[0]
                                    .getBoundingClientRect().top
                            ) {
                                setChangeColor({ background: "#003e6b" });
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
                                    setChangeColor({
                                        background: "white",
                                        color: "#003e6b",
                                    });
                                    if (
                                        document
                                            .getElementsByClassName("go-top")[0]
                                            .getBoundingClientRect().top +
                                        10 >
                                        document
                                            .getElementsByClassName(
                                                "portfolio-area"
                                            )[0]
                                            .getBoundingClientRect().top
                                    ) {
                                        setChangeColor({
                                            background: "#003e6b",
                                        });
                                        if (
                                            document
                                                .getElementsByClassName(
                                                    "go-top"
                                                )[0]
                                                .getBoundingClientRect().top +
                                            10 >
                                            document
                                                .getElementsByClassName(
                                                    "testimonials-area"
                                                )[0]
                                                .getBoundingClientRect().top
                                        ) {
                                            setChangeColor({
                                                background: "white",
                                                color: "#003e6b",
                                            });
                                            if (
                                                document
                                                    .getElementsByClassName(
                                                        "go-top"
                                                    )[0]
                                                    .getBoundingClientRect()
                                                    .top +
                                                10 >
                                                document
                                                    .getElementsByClassName(
                                                        "partner-area"
                                                    )[0]
                                                    .getBoundingClientRect().top
                                            ) {
                                                setChangeColor({
                                                    background: "#003e6b",
                                                });
                                                if (
                                                    document
                                                        .getElementsByClassName(
                                                            "go-top"
                                                        )[0]
                                                        .getBoundingClientRect()
                                                        .top +
                                                    10 >
                                                    document
                                                        .getElementsByClassName(
                                                            "footer-area"
                                                        )[0]
                                                        .getBoundingClientRect()
                                                        .top
                                                ) {
                                                    setChangeColor({
                                                        background: "white",
                                                        color: "#003e6b",
                                                    });
                                                } else {
                                                    setChangeColor({
                                                        background: "#003e6b",
                                                    });
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else {
                            setChangeColor({ background: "#003e6b" });
                        }
                    }
                }
                if (
                    router.pathname === "/solution-startup" ||
                    router.pathname === "/solution-ecommerce" ||
                    router.pathname === "/solution-non-profit" ||
                    router.pathname === "/solution-real-estate" ||
                    router.pathname === "/solution-business"
                ) {
                    if (
                        // typeof window !== "undefined" &&
                        localStorage.getItem("theme") === "dark"
                    ) {
                        setChangeColor({
                            background: "white",
                            color: "#003e6b",
                        });
                    } else {
                        if (
                            document.getElementsByClassName("main-service")
                                .length > 0 &&
                            document
                                .getElementsByClassName("go-top")[0]
                                .getBoundingClientRect().top +
                            10 >
                            document
                                .getElementsByClassName("main-service")[0]
                                .getBoundingClientRect().top
                        ) {
                            setChangeColor({ background: "#003e6b" });
                            if (
                                document
                                    .getElementsByClassName("go-top")[0]
                                    .getBoundingClientRect().top +
                                10 >
                                document
                                    .getElementsByClassName("info")[0]
                                    .getBoundingClientRect().top
                            ) {
                                setChangeColor({
                                    background: "white",
                                    color: "#003e6b",
                                });
                                if (
                                    document
                                        .getElementsByClassName("go-top")[0]
                                        .getBoundingClientRect().top +
                                    10 >
                                    document
                                        .getElementsByClassName(
                                            "features-holder"
                                        )[0]
                                        .getBoundingClientRect().top
                                ) {
                                    setChangeColor({ background: "#003e6b" });
                                    if (
                                        document
                                            .getElementsByClassName("go-top")[0]
                                            .getBoundingClientRect().top +
                                        10 >
                                        document
                                            .getElementsByClassName(
                                                "newInfo"
                                            )[0]
                                            .getBoundingClientRect().top
                                    ) {
                                        setChangeColor({
                                            background: "white",
                                            color: "#003e6b",
                                        });
                                        if (
                                            document
                                                .getElementsByClassName(
                                                    "go-top"
                                                )[0]
                                                .getBoundingClientRect().top +
                                            10 >
                                            document
                                                .getElementsByClassName(
                                                    "getAQuote-holder"
                                                )[0]
                                                .getBoundingClientRect().top
                                        ) {
                                            setChangeColor({
                                                background: "#003e6b",
                                            });
                                            if (
                                                document
                                                    .getElementsByClassName(
                                                        "go-top"
                                                    )[0]
                                                    .getBoundingClientRect()
                                                    .top +
                                                10 >
                                                document
                                                    .getElementsByClassName(
                                                        "footer-area"
                                                    )[0]
                                                    .getBoundingClientRect().top
                                            ) {
                                                setChangeColor({
                                                    background: "white",
                                                    color: "#003e6b",
                                                });
                                            }
                                        } else {
                                            setChangeColor({
                                                background: "white",
                                                color: "#003e6b",
                                            });
                                        }
                                    }
                                }
                            }
                        } else {
                            setChangeColor({ background: "#003e6b" });
                        }
                    }
                }
            } else {
                setThePosition(false);
                setChangeColor({ background: "#003e6b" });
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {
                setThePosition(false);
            });
        };
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
                style={{
                    background: changeColor.background,
                    color: changeColor.color,
                }}
            >
                <i className="bx bx-up-arrow-alt"></i>
            </div>
        );
    };

    return <>{renderGoTopIcon()}</>;
};

export default GoTop;
