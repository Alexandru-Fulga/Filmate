import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MovieDetails = ({ movie, onClose }) => {
    useGSAP(() => {
        gsap.fromTo(".modal",
            {
                opacity: 0,
                scale: 0.8,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
            }
        );
    }, []);

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>

                <div className="modal-content">
                    <img
                        src={movie.poster_path
                            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                            : '/no-movie.png'}
                        alt={movie.title}
                    />

                    <div className="movie-info">
                        <h2>{movie.title}</h2>

                        <div className="meta">
                            <div className="rating">
                                <img src="/star.svg" alt="Rating" />
                                <p>{movie.vote_average?.toFixed(1) || 'N/A'}</p>
                            </div>
                            <span>•</span>
                            <p>{movie.release_date?.slice(0, 4) || 'N/A'}</p>
                            <span>•</span>
                            <p>{movie.original_language?.toUpperCase()}</p>
                        </div>

                        <p className="overview">{movie.overview}</p>

                        <div className="additional-info">
                            <p><strong>Vote Count:</strong> {movie.vote_count}</p>
                            <p><strong>Popularity:</strong> {movie.popularity?.toFixed(1)}</p>
                            <p><strong>Adult Content:</strong> {movie.adult ? 'Yes' : 'No'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;