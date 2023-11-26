export default {
  validations: {
    required: '{field} is required'
  },

  search: {
    placeholder: 'Search for movies',
    submit: 'Movie Search'
  },

  movies: {
    apiError: 'Sorry, an unknown error occurred.',
    notFound: {
      title: 'No Results Found',
      return: 'Return to home',
      text: {
        first: `Sorry, we couldn't find a movie that you're looking for.`,
        second: 'Please try again.'
      }
    }
  }
}