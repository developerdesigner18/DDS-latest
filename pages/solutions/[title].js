import React, { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { accordionData } from "../../data/career";
import { createCareerTitle, createSolutionTitle } from "../../utils/utils";
import PageBanner from "../../components/Common/PageBanner/PageBanner";
import ServiceCard from "../../components/Common/ServiceCard/ServiceCard";
import InfoCard from "../../components/Common/InfoCard/InfoCard";
import Features from "../../components/Solutions/Features/Features";
import GetAQuote from "../../components/Solutions/GetAQuote/GetAQuote";
import { solutionTypes } from "../../data/solutionTypes";

const SolutionTypes = ({ data }) => {
    console.log("data ===", data);
    return (
        <>
            <PageBanner pageTitle="Solution" />

            <ServiceCard
                mainimage={data?.s1mainimage}
                heading={data?.title}
                content={data?.s1content}
                btntext="Request A Quote"
                btnlink="#quote"
            />

            <InfoCard
                heading={data?.title}
                images={data?.i1images}
                content={data?.i1content.map((data) => {
                    return <p>{data}</p>;
                })}
            />

            <Features />

            <InfoCard
                newClass="newInfo"
                heading={data?.title}
                images="/images/solutions/chart.png"
                content={data?.i2content.map((data) => {
                    return <p>{data}</p>;
                })}
            />

            <GetAQuote />
        </>
    );
};

export async function getStaticProps(context) {
    const data = solutionTypes.find(
        (data) => createSolutionTitle(data?.title) === context.params.title
    );
    return {
        props: {
            data,
        },
    };
}

export async function getStaticPaths() {
    const paths = solutionTypes.map((data) => ({
        params: {
            title: createSolutionTitle(data?.title),
        },
    }));

    return {
        paths,
        fallback: true,
    };
}
export default SolutionTypes;
