import { getMovies } from "@/service/cache-movies";
import { getRatings } from "@/service/cache-ratings";

export default {
  userMovies: getMovies(),
  ratings: getRatings()
}