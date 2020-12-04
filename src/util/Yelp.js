const apiKey = e58ZvsEUeySYsB2numoJ4yCOYrwf98STXE-O8j3K1NepDu6Pz14Aw6HJPKiIub-lcmGCxjlzOD1U88cY4eWEiI2-aXpnyg8E6EPGy5Zj3Jobxvo1lMuT98N2QnXJX3Yx

const yelp = {};

search(term, location, sortBy) {
    return fetch (`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term={TERM}&location={LOCATION}&sort_by={SORT_BY}`, 
    { 
        headers: {
          Authorization: `Bearer ${apiKey}` 
        }
})
    .then(response => {
    return response.json();
    })
    .then(jsonResponse => {
        if (jsonResponse.business) {
            return jsonResponse.businesses.map(business => {
                return {
                    id: business.id,
                    imageScr: business.image_url,
                    name: business.name,
                    address: business.location.address,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zip_code,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };        
            });
        } 
    })
}


export default Yelp;