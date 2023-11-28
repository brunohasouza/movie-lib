import { UPDATE_MOVIES, UPDATE_RATINGS } from "./mutations"

export default {
  addMovie({ commit, state }, movie) {
    const hasMovie = state.bookmarkList.some(m => m.imdbID === movie.imdbID)

    if (hasMovie) {
      return false
    }

    const bookmarkList = [...state.bookmarkList]
    bookmarkList.push(movie)

    commit(UPDATE_MOVIES, bookmarkList)

    return true
  },

  removeMovie({ commit, state }, movie) {
    const hasMovie = state.bookmarkList.some(m => m.imdbID === movie.imdbID)

    if (!hasMovie) {
      return false
    }

    const bookmarkList = state.bookmarkList.filter(m => m.imdbID !== movie.imdbID)
    commit(UPDATE_MOVIES, bookmarkList)

    return true
  },

  rateMovie({ commit, state }, { imdbID, stars }) {
    commit(UPDATE_RATINGS, {
      ...state.ratings,
      [imdbID]: stars
    })
  }
}