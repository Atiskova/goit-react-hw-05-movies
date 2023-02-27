import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c978ef3256c1133ebe18d58ddb2527be';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  const { results } = data;
  const movies = results.map(({ id, title, name }) => ({
    id,
    title,
    name,
  }));
  return { movies };
};

export const getSearch = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  const { results } = data;
  const movies = results.map(({ id, title, name }) => ({
    id,
    title,
    name,
  }));
  return { movies };
};

export const getDetails = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;
 
  return {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    overview,
    genres,
  };
};

export const getCast = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const cast = data.cast.map(({ id, name, character, profile_path }) => ({
    id,
    name,
    character,
    profile_path,
  }));
  return cast;
};

export const getReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );

  const reviews = data.results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
  
  return reviews;
};
