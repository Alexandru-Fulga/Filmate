import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Search = ({ searchTerm, setSearchTerm }) => {

    useGSAP(() => {
        gsap.fromTo('.search', {
            opacity: 0,
            scale: 0.8,
        }, {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "back.out",
        })
    }, []);

    return (
        <div className="search">
            <div>
                <img src="search.svg" alt="search" />

                <input
                    type="text"
                    placeholder="Search through thousands of movies..."
                    value={searchTerm}
                    onChange={(ev) => setSearchTerm(ev.target.value)}
                />
            </div>
        </div>
    )
}

export default Search