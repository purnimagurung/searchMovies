import React, { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

const useMovies = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load popular movies on first render
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("failed to load movies");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  //search Logic
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search Movies");
    } finally {
      setLoading(false);
    }
  };
  return {
    searchQuery,
    setSearchQuery,
    movies,
    error,
    loading,
    handleSearch,
  };
};

export default useMovies;
