import React, { useState } from "react";

const CareerAccordian = (props) => {
    const [isshow, setIsShow] = useState(false);
    const hadleShow = () => {
        setIsShow(!isshow);
    };
    return (
        <>
            <div className="accordian-main">
                <button onClick={hadleShow} className="accordian-btn career">
                    {props.title}{" "}
                    {isshow ? (
                        <div className="icons career">
                            <img src="/images/career/downarrow.svg" />
                        </div>
                    ) : (
                        <div className="icons career">
                            <img src="/images/career/right.svg" />
                        </div>
                    )}
                </button>
                {isshow && (
                    <div className="accordian-content">{props.content}</div>
                )}
            </div>
        </>
    );
};

export default CareerAccordian;
