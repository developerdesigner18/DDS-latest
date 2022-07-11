import Link from "next/link";

const Custom404 = () => {
    return (
        <>
            <div className="error-area ptb-100">
                <div className="container">
                    <div className="error-content">
                        <h3>The page doesn't exist!</h3>
                        <p>
                            Sorry,the page you were looking for could not be
                            found.
                        </p>

                        <div className="search-404">
                            <input
                                type="text"
                                className="form-control input-404-holder"
                                placeholder="Try searching for something else"
                                name="coupon-code"
                                id="coupon-code"
                            />
                            <button type="submit" className="default-btn">
                                Search
                            </button>
                        </div>

                        <p>
                            Or you can return to our{" "}
                            <Link href="/">homepage</Link>, or{" "}
                            <Link href="/contact">Contact us</Link> if you can’t
                            find what you looking for.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Custom404;
