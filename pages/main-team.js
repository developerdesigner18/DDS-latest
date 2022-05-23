import Navbar from "../components/_App/Navbar/Navbar";
import PageBanner from "../components/Common/PageBanner/PageBanner";
import Footer from "../components/_App/Footer/Footer";

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
