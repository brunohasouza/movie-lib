const LS_RATINGS = 'RATINGS'

export function getRatings() {
    const ratings = {}
  
    try {
      const lsRatings = JSON.parse(localStorage.getItem(LS_RATINGS))
  
      if (lsRatings) {
        Object.assign(ratings, lsRatings)
      }
    } catch (error) {
      console.error('Invalid LocalStorage property.')
    }
  
    return ratings
}

export function updateRatings(ratings) {
  try {
    localStorage.setItem(LS_RATINGS, JSON.stringify(ratings)) 
  } catch (error) {
    console.error('Invalid json object format.')
    return false
  }

  return getRatings()
}