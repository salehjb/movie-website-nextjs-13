import { constants } from "./constants"

export const apiRequests = {
    getMovies: `${constants.API_URL}/movies`,
    getSingleMovie: (id) => `${constants.API_URL}/movies/${id}`,
};