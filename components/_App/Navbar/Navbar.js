import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "../../../utils/ActiveLink";
import { LOGO_DARK, LOGO_LIGHT } from "../../../utils/AppConfig";

const Navbar = () => {
    const router = useRouter();
    const location = router.pathname;
    const [isDarkMode, setIsDarkMode] = useState(
        typeof window !== "undefined" && localStorage.getItem("isDarkMode")
            ? localStorage.getItem("isDarkMode")
            : false
    );
    const { theme, setTheme } = useTheme();

    const [menu, setMenu] = useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    });

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    const classOne = menu
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = menu
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    return (
        <>
            <div
                id="navbar"
                className={`navbar-area ${
                    location === "/" ? "" : "navbar-color-white"
                }`}
                style={{
                    backgroundColor: `${
                        location === "/404" ? "#003e6b" : "transparent"
                    }`,
                }}
            >
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link href="/">
                                <a
                                    onClick={toggleNavbar}
                                    className="navbar-brand"
                                >
                                    <img
                                        src={
                                            location === "/"
                                                ? LOGO_DARK
                                                : LOGO_LIGHT
                                        }
                                        alt="logo"
                                        width="130px"
                                    />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div
                                className={classOne}
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Home
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/about"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                About
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/services"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Services
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/pricing"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Pricing
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/portfolio"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Portfolio
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/solutions"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Solutions
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/blog"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Blog
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            href="/contact"
                                            activeClassName="active"
                                        >
                                            <a
                                                onClick={toggleNavbar}
                                                className="nav-link"
                                            >
                                                Contact
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <div
                                        className="cart-btn"
                                        onClick={() => {
                                            console.log(isDarkMode);
                                            setIsDarkMode((prev) => !prev);
                                            localStorage.setItem(
                                                "DarkMode",
                                                isDarkMode
                                            );
                                            setTheme(
                                                isDarkMode ? "dark" : "light"
                                            );
                                        }}
                                    >
                                        <a>
                                            <img
                                                src={
                                                    location === "/"
                                                        ? "/images/night-mode-dark.svg"
                                                        : "/images/night-mode-light.svg"
                                                }
                                                alt="image"
                                            />
                                        </a>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div
                                        className="search-box"
                                        onClick={handleToggleSearchModal}
                                    >
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Search Form */}
            <div
                className={`search-overlay ${
                    isActiveSearchModal ? "" : "search-overlay-active"
                }`}
            >
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>

                        <div
                            className="search-overlay-close"
                            onClick={handleToggleSearchModal}
                        >
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input
                                    type="text"
                                    className="input-search"
                                    placeholder="Search here..."
                                />
                                <button type="submit">
                                    <i className="flaticon-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}
        </>
    );
};

export default Navbar;
