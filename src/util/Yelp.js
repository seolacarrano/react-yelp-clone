const apiKey = e58ZvsEUeySYsB2numoJ4yCOYrwf98STXE-O8j3K1NepDu6Pz14Aw6HJPKiIub-lcmGCxjlzOD1U88cY4eWEiI2-aXpnyg8E6EPGy5Zj3Jobxvo1lMuT98N2QnXJX3Yx

const yelp = {};

search(term, location, sortBy) {
    return fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term={TERM}&location={LOCATION}&sort_by={SORT_BY}`);
}