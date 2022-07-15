export const getCurrentYear = new Date().getFullYear();

export const createTitleSlug = (title) => {
    return title.toString().replace(/\s+/g, "-").toLowerCase();
};
