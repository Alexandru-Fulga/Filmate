import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import WatchProviders from "./WatchProviders";

const MovieDetails = ({ movie, onClose }) => {
    const [watchProviders, setWatchProviders] = useState(null);

    useGSAP(() => {
        gsap.fromTo(".modal",
            {
                opacity: 0,
                scale: 0.6,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.3,
                ease: "power1.out",
            }
        );
    }, []);

    useEffect(() => {
        const fetchWatchProviders = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
                        },
                    }
                );
                const data = await response.json();
                setWatchProviders(data.results);
            } catch (error) {
                console.error('Error fetching watch providers:', error);
            }
        };

        fetchWatchProviders();
    }, [movie.id]);

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

                        <h3 className="text-white text-xl font-bold mt-6 mb-2">Where to Watch</h3>
                        <WatchProviders providers={watchProviders} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;