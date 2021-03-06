import { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import withReactContent from "sweetalert2-react-content";
import GetAQuote from "../../Solutions/GetAQuote/GetAQuote";

const MySwal = withReactContent(Swal);

const alertContent = () => {
    MySwal.fire({
        title: "Congratulations!",
        text: "Your message was successfully send and will back to you soon",
        icon: "success",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
    });
};
const PricingBlock = () => {
    const [changeBg, setChangeBg] = useState("");
    const [changeColor, setChangeColor] = useState("");
    const [values, setvalues] = useState([]);
    const [getCheckVal, setCheckVal] = useState({
        webClick: false,
        mobClick: false,
        mobGClick: false,
    });

    const { register, errors } = useForm();

    const [getDesign, setDesign] = useState("");
    const [getPage, setPage] = useState("");

    const [addOns, setAddons] = useState([]);

    const [email, setEmail] = useState("");

    const handleCheck = (val, e) => {
        if (val === "Website" && e.target.checked === true) {
            setCheckVal({ ...getCheckVal, webClick: true });
            setvalues([...values, val]);
        } else if (val === "Mobile Application" && e.target.checked === true) {
            setCheckVal({ ...getCheckVal, mobClick: true });
            setvalues([...values, val]);
        } else if (
            val === "Mobile Game Application" &&
            e.target.checked === true
        ) {
            setCheckVal({ ...getCheckVal, mobGClick: true });
            setvalues([...values, val]);
        } else {
            if (val === "Website") {
                setCheckVal({ ...getCheckVal, webClick: false });
                const allData = values.filter((data) => {
                    return data !== val;
                });
                setvalues([...hello]);
            } else if (val === "Mobile Application") {
                setCheckVal({ ...getCheckVal, mobClick: false });
                const allData = values.filter((data) => {
                    return data !== val;
                });
                setvalues([...hello]);
            } else {
                setCheckVal({ ...getCheckVal, mobGClick: false });
                const allData = values.filter((data) => {
                    return data !== val;
                });
                setvalues([...hello]);
            }
        }

        setChangeBg("var(--darkCardColor)");
        setChangeColor("white");
    };

    const handleSubmit = async (e) => {
        e.preventDefault;
        try {
            const url = `http://localhost:3000/api/pricecalculation`;
            const payload = { values, getDesign, getPage, addOns, email };
            await axios.post(url, payload);
            alertContent();
        } catch (error) {
            console.log(error);
        }
    };

    const heightMarks = {
        0: "no need",
        33: "Basic",
        66: "Medium",
        100: "Complex",
    };

    const pageMarks = {
        0: "1",
        20: "5",
        40: "10",
        60: "15",
        80: "20",
        100: "25+",
    };

    return (
        <>
            <div className="pt-50 product-price-holder ">
                <div className="container main-pricing">
                    <div className="product-price-block">
                        <h3 className="price-title">Select Product</h3>

                        <div className="select-design-type">
                            <div
                                className="design-type form-group"
                                style={{
                                    background:
                                        getCheckVal.webClick == true
                                            ? changeBg
                                            : "",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    name="Website"
                                    onClick={(e) => handleCheck("Website", e)}
                                    className="checkevent"
                                    id="website"
                                />
                                <label
                                    style={{
                                        color:
                                            getCheckVal.webClick == true
                                                ? changeColor
                                                : "",
                                    }}
                                    for="website"
                                >
                                    Website
                                </label>
                            </div>
                            <div
                                className="design-type form-group"
                                style={{
                                    background:
                                        getCheckVal.mobClick == true
                                            ? changeBg
                                            : "",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    name="Mobile Application"
                                    onClick={(e) =>
                                        handleCheck("Mobile Application", e)
                                    }
                                    className="checkevent"
                                    id="mobile"
                                />
                                <label
                                    style={{
                                        color:
                                            getCheckVal.mobClick == true
                                                ? changeColor
                                                : "",
                                    }}
                                    for="mobile"
                                >
                                    Mobile Application
                                </label>
                            </div>
                            <div
                                className="design-type form-group"
                                style={{
                                    background:
                                        getCheckVal.mobGClick == true
                                            ? changeBg
                                            : "",
                                }}
                            >
                                <input
                                    type="checkbox"
                                    name="Mobile Game Application"
                                    onClick={(e) =>
                                        handleCheck(
                                            "Mobile Game Application",
                                            e
                                        )
                                    }
                                    className="checkevent"
                                    id="Game"
                                />
                                <label
                                    style={{
                                        color:
                                            getCheckVal.mobGClick == true
                                                ? changeColor
                                                : "",
                                    }}
                                    for="Game"
                                >
                                    Mobile Game Application
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="design-block">
                        <h3 className="price-title">Design</h3>
                        <Slider
                            defaultValue={0}
                            min={0}
                            max={100}
                            step={1}
                            onChange={(e) => setDesign(e)}
                            marks={heightMarks}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="page-block">
                        <h3 className="price-title-page">Number of Pages</h3>
                        {/* <input type="range" min="1" max="100" /> */}
                        <Slider
                            defaultValue={0}
                            min={0}
                            max={100}
                            step={1}
                            onChange={(e) => setPage(e)}
                            marks={pageMarks}
                            style={{ width: "100%" }}
                        />
                    </div>
                    <div className="website-addons">
                        <h3 className="price-title">Website Addons</h3>
                        <p className="addons">
                            <label>Logo Design</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([
                                                ...addOns,
                                                "Logo Design",
                                            ])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return (
                                                        data !== "Logo Design"
                                                    );
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Ecommerce</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([
                                                ...addOns,
                                                "Ecommerce",
                                            ])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return (
                                                        data !== "Ecommerce"
                                                    );
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Image / Video Galleries</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([
                                                ...addOns,
                                                "Image / Video Galleries",
                                            ])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return (
                                                        data !==
                                                        "Image / Video Galleries"
                                                    );
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Forms / Lead Generation</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([
                                                ...addOns,
                                                "Forms / Lead Generation",
                                            ])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return (
                                                        data !==
                                                        "Forms / Lead Generation"
                                                    );
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Login / Signup profile</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([
                                                ...addOns,
                                                "Login / Signup profile",
                                            ])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return (
                                                        data !==
                                                        "Login / Signup profile"
                                                    );
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Blog</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([...addOns, "Blog"])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return data !== "Blog";
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                        <p className="addons">
                            <label>Search</label>
                            <label className="toggleSwitch large">
                                <input
                                    type="checkbox"
                                    onChange={(e) =>
                                        e.target.checked
                                            ? setAddons([...addOns, "Search"])
                                            : (addOns = addOns.filter(
                                                (data) => {
                                                    return data !== "Search";
                                                }
                                            ))
                                    }
                                />
                                <span>
                                    <span>No</span>
                                    <span>Yes</span>
                                </span>
                                <a></a>
                            </label>
                        </p>
                    </div>
                    <GetAQuote heading="dummyText" subHeading="dummy one" description="here is the description" buttonText="Submit" />
                    {/* <div className="row" style={{ alignItems: "center" }}>
                        <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                                <label>Email</label>

                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                    ref={register({
                                        required: true,
                                        pattern: /^\S+@\S+$/i,
                                    })}
                                />
                                <div
                                    className="invalid-feedback"
                                    style={{ display: "block" }}
                                >
                                    {errors.email && "Email is required."}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <button
                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                                className="default-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default PricingBlock;
