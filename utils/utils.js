export const getCurrentYear = new Date().getFullYear();

export const createCareerTitle = (title) => {
    // console.log("title==", title);
    return title.toString().replace(/\s+/g, "-").toLowerCase();
};

export const createSolutionTitle = (title) => {
    console.log("title==", title);
    return title.toString().replace(/\s+/g, "-").toLowerCase();
};
