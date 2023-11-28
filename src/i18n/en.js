export default {
  validations: {
    required: '{field} is required'
  },

  search: {
    placeholder: 'Search for movies',
    submit: 'Movie Search'
  },

  movies: {
    newSearch: 'New Search',
    results: 'Search for: "{keywords}"',
    total: 'Total results: {number}',
    removed: 'Movie removed successfully',
    added: 'Movie added successfully',
    rated: 'Movie rated successfully',
    apiError: 'Sorry, an unknown error occurred.',
    notFound: {
      title: 'No Results Found',
      return: 'Return to home',
      text: {
        first: `Sorry, we couldn't find a movie that you're looking for.`,
        second: 'Please, do a new search.'
      }
    }
  }
}