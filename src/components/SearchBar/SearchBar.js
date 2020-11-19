import React from 'react';
import './SearchBar.css';

const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    // created a method to create the list items dynamically
    renderSortByOptions() {
        //pass a callback function to the map() method
        //sortByOption[sortByOption] is the value of the key
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOption[sortByOption];
            return <li key={sortByOptionValue}>{sortByOption}</li>;
        }
        );
    }

    render() {
        return (
        <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}      
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a>Let's Go</a>
        </div>
      </div>
      )

    }
}

export default SearchBar