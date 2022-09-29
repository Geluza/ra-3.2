import React from 'react'
import propTypes from 'prop-types';
import Article from './Article'


function Listing({items}) {

   

  return (
    <div className="item-list">
   {items.map(item => <Article key={item.listing_id} item={item}/>)}
    </div>
  );
}

Listing.propTypes = {
  items: propTypes.array,
}

Listing.defaultProps = {
  items: []
}

export default Listing;
