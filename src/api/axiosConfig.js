import axios from "axios";

const apiUrl = 'http://localhost:8080';

export const getMovies = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/v1/movies`);

        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err); // Muestra el error en la consola para registro
        throw err; // Propaga el error para que los componentes que llamen a esta función puedan manejarlo
    }
}

export const getReviews = async () => {
    try {
        const response = await axios.get(`${apiUrl}/api/v1/reviews`);

        console.log(response.data);

        return response.data;
    } catch (err) {
        console.error(err); // Muestra el error en la consola para registro
        throw err; // Propaga el error para que los componentes que llamen a esta función puedan manejarlo
    }
}

export const addReviews = async (reviewBody, imdbId) => {
    try {
        const response = await axios.post(`${apiUrl}/api/v1/reviews`, {
            reviewBody,
            imdbId,
        });

        return response.data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export const getMoviesData = async (movieId) =>{
    try{
        const response = await axios.get(`${apiUrl}/api/v1/movies/${movieId}`);
        return response.data;
    } catch(err){
        console.error(err);
        throw err;
    }
}
    

