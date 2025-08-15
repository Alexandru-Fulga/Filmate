import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TrendingMovies = ({ trendingMovies }) => {

    useGSAP(() => {
        gsap.fromTo('li',
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "back.out",
            }
        );
    }, []);

    return (
        <div className="trending">
            <h2>Trending Movies</h2>

            <ul>
                {trendingMovies && trendingMovies.map((movie, index) => (
                    <li key={movie.movie_id}>
                        <p>{index + 1}</p>
                        <img
                            src={`https://image.tmdb.org/t/p/w200${movie.poster_url}`}
                            alt={movie.searchTerm}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TrendingMovies;