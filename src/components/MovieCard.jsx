import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MovieCard = ({ movie, onMovieClick }) => {
    const {
        title,
        vote_average,
        poster_path,
        release_date,
        original_language,
        overview
    } = movie;

    return (
        <div className="movie-card cursor-pointer" onClick={() => onMovieClick(movie)}>
            <img src={poster_path
                ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                : '/no-movie.png'} alt="Movie Poster" />

            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="/star.svg" alt="Rating" className="rating-star" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>

                    <span>•</span>
                    <p className="lang">{original_language}</p>
                    <span>•</span>
                    <p className="year">{release_date ? release_date.slice(0, 4) : 'N/A'}</p>
                </div>

                <div className="overview">
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    )
}

export default MovieCard