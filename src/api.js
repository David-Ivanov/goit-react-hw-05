import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.headers = {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZWQ5MGM0OTVkM2MwYTZjMmRmZWEzYWVlODRhNzg0MyIsInN1YiI6IjY1ZTk4Nzc4YWY5NTkwMDEyZGRiNjE2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0LsWfNI469m8FAuDqhmrji2adyBjnH7tU6MJJ6ZO_Ho'
}
axios.defaults.params = {
    key: '1ed90c495d3c0a6c2dfea3aee84a7843'
}

export function fetchTrendingMovies() {
    return axios.get('trending/movie/day');
}

export function fetchMovieDetails(id) {
    return axios.get(`movie/${id}`);
}

export function fetchMovieCast(id) {
    return axios.get(`movie/${id}/credits`);
}

export function fetchMovieReview(id) {
    return axios.get(`movie/${id}/reviews`);
}

export function searchMovies(query) {
    return axios.get('search/movie', {
        params: {
            query
        }

    })
}