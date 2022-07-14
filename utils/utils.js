export const getCurrentYear = new Date().getFullYear();

export const createCareerTitle = (title) => {

    return title.toString().replace(/\s+/g, "-").toLowerCase()
}
