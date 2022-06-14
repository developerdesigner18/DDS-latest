import { useState } from "react";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import FaqBlock from "../components/Common/Faq/Accordian";

const Faq = () => {
    const accordionData = [
        {
            id: "1",
            title: "I want to join Daydreamsoft What Should I do ?",
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, `,
        },
        {
            id: "2",
            title: "What is company’s working hours ?",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
        },
        {
            id: "3",
            title: "How long will it take for my web project to be completed ? ",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "4",
            title: "Will we need to have a face-to-face meeting to begin the project ? ",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "5",
            title: "how should I supply content for my website ?",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "6",
            title: "Will my website design be Search Engine friendly ? ",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "7",
            title: "Do I need a database for my website ?",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
    ];

    return (
        <>
            <PageBanner pageTitle="Frequently Asked Questions" />
            <div className="accordion-main">
                {accordionData.map((elm) => {
                    return (
                        <>
                            <div className="container">
                                <FaqBlock
                                    key={elm.id}
                                    title={elm.title}
                                    content={elm.content}
                                />
                            </div>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Faq;
