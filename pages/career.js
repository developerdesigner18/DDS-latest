import CareerAccordian from "../components/Common/Career/CareerAccordian";
import PageBanner from "../components/Common/PageBanner/PageBanner";

const Career = () => {
    const accordionData = [
        {
            id: "1",
            title: "Wordpress Developer",
            content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 
            2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, `,
        },
        {
            id: "2",
            title: "React Native Developer",
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`,
        },
        {
            id: "3",
            title: "PHP Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "4",
            title: "Laravel Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "5",
            title: "Mean/Mern Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "6",
            title: "UX / UI Designer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "7",
            title: "Flutter Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
        {
            id: "8",
            title: "Python Developer",
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`,
        },
    ];

    return (
        <>
            <PageBanner pageTitle="Career" />

            <div className="accordion-main">
                {accordionData.map((elm) => {
                    return (
                        <>
                            <div className="container">
                                <CareerAccordian
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

export default Career;
