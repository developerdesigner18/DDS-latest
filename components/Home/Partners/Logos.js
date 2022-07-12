import React, { useEffect, useState } from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
export const Item = (props) => {
    const [state, setState] = useState({
        level: props.level,
    });
    const className = "item level" + props.level;
    return <div className={className}>{props.id}</div>;
};
const Logos = (props) => {
    const [items, setItem] = useState(props.items);
    const [active, setActive] = useState(props.active);
    const [direction, setDirection] = useState("");

    const handleleftClick = () => {
        moveLeft();
    };
    const handlerightClick = () => {
        moveRight();
    };

    const generateItems = () => {
        var item = [];
        var level;
        // let active = state.active;
        for (var i = active - 2; i < active + 3; i++) {
            var index = i;
            if (i < 0) {
                index = items.length + i;
            } else if (i >= items.length) {
                index = i % items.length;
            }
            level = active - i;
            item.push(<Item key={index} id={items[index]} level={level} />);
        }
        return item;
    };

    const moveLeft = () => {
        var newActive = active;
        newActive--;
        // let hello = items.length;
        setActive(newActive < 0 ? items.length - 1 : newActive);
        setDirection("left");
    };

    const moveRight = () => {
        var newActive = active;
        setActive(newActive + (1 % items.length));
        setDirection("right");
    };

    const partners = [
        {
            id: 1,
            image: "/images/partner/partner-img6.png",
        },
        {
            id: 2,
            image: "/images/partner/partner-img4.png",
        },
        {
            id: 3,
            image: "/images/partner/partner-img3.png",
        },
        {
            id: 4,
            image: "/images/partner/partner-img1.png",
        },
        {
            id: 5,
            image: "/images/partner/partner-img2.png",
        },
        {
            id: 6,
            image: "/images/partner/partner-img5.png",
        },
    ];

    // const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    return (
        <>
            <div id="carousel" className="noselect">
                <div
                    className="arrow arrow-left"
                    onClick={() => handleleftClick()}
                >
                    <i className="fi-arrow-left"></i>
                </div>
                <CSSTransitionGroup transitionName={direction}>
                    {generateItems()}
                </CSSTransitionGroup>
                <div
                    className="arrow arrow-right"
                    onClick={() => handlerightClick()}
                >
                    <i className="fi-arrow-right"></i>
                </div>
            </div>
            {/* <Logos partners={partners} active={0} /> */}
        </>
    );
};

export default Logos;
