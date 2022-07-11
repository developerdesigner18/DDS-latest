import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "../../../utils/ActiveLink";
import { LOGO_DARK, LOGO_LIGHT } from "../../../utils/AppConfig";

const Navbar = () => {
    const router = useRouter();
    const location = router.pathname;

    const { theme, setTheme } = useTheme();
    console.log(theme, "theme");

    const [menu, setMenu] = useState(true);

    const toggleNavbar = () => {
        setMenu(!menu);
    };

    const darkMode =
        typeof window !== "undefined" && localStorage.getItem("theme");

    if (darkMode) {
        console.log("Name exists", location);
    } else {
        typeof window !== "undefined" && localStorage.setItem("theme", "light");
    }

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
    useEffect(() => {
        setTheme(
            // typeof window !== "undefined" &&
            localStorage.getItem("theme")
        );
    }, []);

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };
    console.log(isActiveSearchModal, "searcyModdmlmc");

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
                                    {theme === "dark" && (
                                        <img src={LOGO_LIGHT} alt="image" />
                                    )}
                                    {location === "/" && theme === "light" && (
                                        <img src={LOGO_DARK} alt="image" />
                                    )}
                                    {location !== "/" && theme === "light" && (
                                        <img src={LOGO_LIGHT} alt="image" />
                                    )}
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
                                            setTheme(
                                                // typeof window != "undefined" &&
                                                localStorage.getItem("theme") ==
                                                    "light"
                                                    ? "dark"
                                                    : "light"
                                            );
                                        }}
                                    >
                                        <a>
                                            {location === "/" &&
                                                theme == "light" &&
                                                (console.log(theme, "🔥🔥"),
                                                (
                                                    <img
                                                        src="/images/moon.svg"
                                                        alt="image"
                                                    />
                                                ))}
                                            {location !== "/" &&
                                                theme == "light" &&
                                                (console.log(theme, "🔥🔥"),
                                                (
                                                    <img
                                                        src="/images/night-mode-light.svg"
                                                        alt="image"
                                                    />
                                                ))}
                                            {theme == "dark" &&
                                                (console.log(theme, "🔥🔥"),
                                                (
                                                    <img
                                                        src="/images/sun.svg"
                                                        alt="image"
                                                    />
                                                ))}
                                        </a>
                                    </div>
                                </div>

                                <div
                                    className={`option-item ${
                                        location === "/"
                                            ? "home-search"
                                            : "other-search"
                                    }`}
                                >
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
            {console.log(isActiveSearchModal, "yessssss")}
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
