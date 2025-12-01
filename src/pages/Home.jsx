// import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
// import { getPopularMovies, searchMovies } from "../services/api";
import useMovies from "../hooks/useMovies";

export const Home = () => {
  const {
    searchQuery,
    setSearchQuery,
    movies,
    error,
    loading,
    handleSearch
  } = useMovies();
  // const [searchQuery, setSearchQuery] = useState("");
  // const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  // // Load popular movies on first render
  // useEffect(() => {
  //   const loadPopularMovies = async () => {
  //     try {
  //       const popularMovies = await getPopularMovies();
  //       setMovies(popularMovies);
  //     } catch (err) {
  //       console.log(err);
  //       setError("Failed to load movies");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   loadPopularMovies();
  // }, []);

  //  // Search logic
  // const handleSearch = async (e) => {
  //   e.preventDefault();

  //   if(!searchQuery.trim()) return 
  //   // if(loading) return
  //   setLoading(true);

  //   try {
  //     const searchResults = await searchMovies(searchQuery)
  //     setMovies(searchResults)
  //     setError(null)
  //   } catch(err) {
  //     console.log(err)
  //     setError("Failed to search movies")

  //   }finally {
  //     setLoading(false)
  //   }
  // };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message"> {error} </div> }
      {loading ? (<div className="loading">loading...</div>) :
      (
        <div className="movies-grid">
          {movies?.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
