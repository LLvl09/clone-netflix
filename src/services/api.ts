import path from "path";

const API_KEY = "ba2aac4459592c0ab70de0f9a6e7d9e8";
const LANGUAGE = "pt-br";

const categories = [{
    name: "popular",
    title: "Populares",
    path: `/movie/popular?api_key=${API_KEY}&language=${LANGUAGE}`,
    isLarge: true
},
{
    name: "comedy",
    title: "Comédias",
    path: `/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=35`,
    isLarge: false
}, {
    name: "romances",
    title: "Romances",
    path: `/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=10749`,
    isLarge: false
},
    , {
    name: "documentaries",
    title: "Documentários",
    path: `/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=99`,
    isLarge: false
},
    , {
    name: "action",
    title: "Ação",
    path: `/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=28`,
    isLarge: false
}];

//get movies from api
export const getMovies = async (path: any) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (e) {
        console.log("error getMovies: ", e);
    }
}

export default categories;