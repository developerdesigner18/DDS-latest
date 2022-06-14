import React, { useState } from "react";

const FaqBlock = (props) => {
    const [isshow, setIsShow] = useState(false);
    const hadleShow = () => {
        setIsShow(!isshow);
    };
    return (
        <>
            <div className="accordian-main">
                <button onClick={hadleShow} className="accordian-btn">
                    {props.title}{" "}
                    {isshow ? (
                        <div className="icons">
                            <img src="/images/Faq/removei.svg" />
                        </div>
                    ) : (
                        <div className="icons">
                            <img src="/images/Faq/addi.svg" />
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

export default FaqBlock;
