import { updateMovies } from "@/service/cache-movies"
import { updateRatings } from "@/service/cache-ratings"

export const UPDATE_MOVIES = 'UPDATE_MOVIES'
export const UPDATE_RATINGS = 'UPDATE_RATINGS'

export default {
  [UPDATE_MOVIES](state, movies) {
    state.bookmarkList = movies
    updateMovies(state.bookmarkList)
  },

  [UPDATE_RATINGS](state, ratings) {
    state.ratings = ratings
    updateRatings(ratings)
  }
}