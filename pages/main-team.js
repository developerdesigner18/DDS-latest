import PageBanner from "../components/Common/PageBanner/PageBanner";
import TeamBlock from "../components/Common/Team/TeamBlock";

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
            <PageBanner pageTitle="Our Main Team" />
            <TeamBlock />
        </>
    );
};

export default MainTeam;
