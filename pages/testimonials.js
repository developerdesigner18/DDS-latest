import PageBanner from "../components/Common/PageBanner/PageBanner";

const testimonials = [
    {
        name: "John Smith",
        designation: "Python Developer",
        title: "",
        subtitle: "",
        feedback:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
];

const Testimonials = () => {
    return (
        <>
            <PageBanner pageTitle="Our Testimonials" />
        </>
    );
};

export default Testimonials;
