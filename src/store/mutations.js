import { updateMovies } from "@/service/cache-movies"

export const UPDATE_MOVIES = 'UPDATE_MOVIES'

export default {
  [UPDATE_MOVIES](state, movies) {
    state.userMovies = movies
    updateMovies(state.userMovies)
  }
}