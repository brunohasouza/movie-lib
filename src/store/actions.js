import { UPDATE_MOVIES } from "./mutations"

export default {
  addMovie({ commit, state }, movie) {
    const hasMovie = state.userMovies.some(m => m.imdbID === movie.imdbID)

    if (hasMovie) {
      return false
    }

    const userMovies = [...state.userMovies]
    userMovies.push(movie)

    commit(UPDATE_MOVIES, userMovies)

    return true
  },

  removeMovie({ commit, state }, movie) {
    const hasMovie = state.userMovies.some(m => m.imdbID === movie.imdbID)

    if (!hasMovie) {
      return false
    }

    const userMovies = state.userMovies.filter(m => m.imdbID !== movie.imdbID)
    commit(UPDATE_MOVIES, userMovies)

    return true
  }
}