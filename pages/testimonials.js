import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import Footer from "../components/_App/Footer/Footer";

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
            <Navbar />

            <PageBanner pageTitle="Our Testimonials" />

            <Footer />
        </>
    );
};

export default Testimonials;
