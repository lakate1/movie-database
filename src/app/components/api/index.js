const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "af08a1b784e0d6e9efccd43c80d455dd";

const fetchMovies = async () => {
  try {
    const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    console.log("fetch response", data);
    return data.results;
  } catch (error) {
    throw error;
  }
};

export default fetchMovies;