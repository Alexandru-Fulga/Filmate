import { createClient } from '@supabase/supabase-js';

// Instancia de Supabase
export const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY);


/**
 * Registra o incrementa el contador de búsqueda de una película.
 */
export async function registerSupabaseMovieSearch(movie) {
    const { error } = await supabase.rpc('increment_movie_search_count', {
        movie_id_arg: movie.id,
        search_term_arg: movie.title,
        poster_url_arg: movie.poster_path
    });

    if (error) {
        console.error('Error registering the movie search.', error);
    } else {
        console.log(`Search of ${movie.title} registered correctly.`)
    }
}

/**
 * Obtiene la lista de películas más buscadas desde Supabase.
 */
export async function fetchTrendingMovies() {
    const { data, error } = await supabase
        .from('Metrics')
        .select('*')
        .order('Count', { ascending: false })
        .limit(5); // Limitamos a las 10 más populares

    if (error) {
        console.error('Error fetching trending movies:', error);
        // Devolvemos un array vacío en caso de error para no romper el componente
        return [];
    }

    return data || [];
}