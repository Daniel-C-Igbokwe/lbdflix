import MovieList from "./MovieList";

async function fetchTrendingMovies() {
  const response = await fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=514318c6f6f673457a51ffcaf8158cf2"
  );
  const movies = await response.json();
  return movies;
}

// https://api.themoviedb.org/3/movie/now_playing?api_key=514318c6f6f673457a51ffcaf8158cf2

const Trending = async () => {
  const moviesResponse = await fetchTrendingMovies();

  return (
    <div className="trending">
      <div className="container">
        <h1>&#128293;Trending All Week</h1>
        <MovieList moviesResponse={moviesResponse} />
      </div>
    </div>
  );
};

export default Trending;
