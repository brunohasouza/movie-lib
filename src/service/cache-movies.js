const LS_MOVIES = 'MOVIES'

export function getMovies() {
  const movies = []

  try {
    const lsMovies = JSON.parse(localStorage.getItem(LS_MOVIES))

    if (Array.isArray(lsMovies)) {
      movies.push(...lsMovies.filter(movie => !!movie.imdbID))
    }
  } catch (error) {
    console.error('Invalid LocalStorage property.')
  }

  return movies
}

export function updateMovies(movies) {
  try {
    localStorage.setItem(LS_MOVIES, JSON.stringify(movies)) 
  } catch (error) {
    console.error('Invalid json object format.')
    return false
  }

  return getMovies()
}