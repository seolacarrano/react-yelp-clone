## Project Description
This is a Yelp clone built by React, JavaScript, and Yelp API.
Users can search for restaurants in any place that Yelp offers.
There're 3 search options, Best Match, Highest Rated, and Most Reviewed. Users can see different results depending on the option they choose.

## Project 
- [Yelp Clone](https://sa-react-project.netlify.app/)


#### MVP
- Create Creating Static Components
- Passing Information to Components
- Setting the State of YUMYUM
- Interacting with the Yelp API

| Letter | Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | :---: |
| A | Create Creating Static Components | H | 3hrs | 3hrs |
| B | Passing Information to Components | H | 5hrs | 5hrs |
| C | Setting the State of YUMYUM | H | 3hrs | 5hrs |
| D | Interacting with the Yelp API | H | 3hrs | 3hrs |
| - | Total | - | 14hrs | 16hrs |

## Code Snippets
```
const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
```