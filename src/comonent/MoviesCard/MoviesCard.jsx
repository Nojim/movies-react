import styles from './../MoviesCard/MoviesCard.module.css'

export function MovieCard({movie}) {
    const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className={styles.movieCard}>
            <img 
                width={230} 
                height={345}
                className={styles.movieImage} 
                src={imageURL} 
                alt={movie.title} 
            />
            <div>{movie.title}</div>
        </li>
    );
}
