import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Footer from "../components/_App/Footer";

const mainTeam = [
    {
        name: "Ajay Paladiya",
        designation: "CEO & Founder",
        image: "",
    },
];

const MainTeam = () => {
    return (
        <>
            <Navbar />

            <PageBanner pageTitle="Our Main Team" />

            <Footer />
        </>
    );
};

export default MainTeam;
