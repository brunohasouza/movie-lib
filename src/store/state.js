import { getMovies } from "@/service/cache-movies";
import { getRatings } from "@/service/cache-ratings";

export default {
  bookmarkList: getMovies(),
  ratings: getRatings()
}