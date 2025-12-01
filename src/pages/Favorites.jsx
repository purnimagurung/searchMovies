import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from '../components/MovieCard'

export const Favorites = () => {
  const {favorites} = useMovieContext();

    if (favorites) {
      return (
        <div className="favorites-empty">
          <h2>Your Favorites </h2>
          {favorites.map((movie) => (
            <MovieCard movie = {movie} key={movie.id} />
          ))}
        </div>
    );}
}

export default Favorites;
