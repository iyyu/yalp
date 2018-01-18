import React from 'react';
import ReactDOM from 'react-dom';
import BusinessEntry from './BusinessEntry.jsx';
import { Link } from 'react-router-dom';

class BusinessList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entries: this.props.businesses.data
    }
  }
  componentWillMount() {
    document.body.style.background = "url('wood.jpg')";
    document.body.style.backgroundSize = "100%";
    document.body.style.backgroundRepeat = "repeat-y";
  }

  sortByPrice() {
    let pricedEntries = this.props.businesses.data.filter(entry => entry.price_level);
    let sortedPricedEntries = pricedEntries.sort((a, b) => {
      return b.price_level - a.price_level
    })
    this.setState({entries: sortedPricedEntries});
  }

  sortByRating() {
    let ratedEntries = this.props.businesses.data.sort((a, b) => {
      return b.rating - a.rating 
    })
    this.setState({entries: ratedEntries})
  }

    sortByFavorited() {
    const {favorites} = this.props;
    var favoritedEntries = this.props.businesses.data.filter(entry => {
      if (favorites[entry.id]){
       return entry
      }
    })
    this.setState({entries: favoritedEntries})
  }

  sortByOpen() {
    let openEntries = this.props.businesses.data.filter(entry => entry.opening_hours.open_now);
    console.log(openEntries)
    
    this.setState({entries: openEntries});

  }

  displayBusinessEntries() {
    const { favorites } = this.props;
    return this.state.entries.map((business) => 
      <Link key={business.id} to={`/business/${business.id}`} onClick={(e) => this.props.updateBusiness(e, business)} style={{ textDecoration: 'none' }}>    
      <BusinessEntry business={business}
                     key={business.id}
                     favorite={favorites[business.id] ? true : false} />
      </Link> 
    )
    
  }

    render() {
    return (
      <div>
      <div className="filterOptionsBar">

        <button id="filterPrice" className="filterButton" onClick={ () => {
          this.sortByPrice();
        }}> Price </button>
        <button id="filterOpen" className="filterButton" onClick={ () => {
          this.sortByOpen();
        }}> Is Open </button>
        <button id="filterRating" className="filterButton" onClick={ () =>{
          this.sortByRating();
        }}> Rating </button>
        <button id="filterNearby" className="filterButton"> Nearby </button>
        <button id="filterFavorited" className="filterButton" onClick={ () => {
           this.sortByFavorited();
         }}> Favorited </button>
      </div>
        {this.displayBusinessEntries()}
      </div>
    )
  }
}

export default BusinessList;