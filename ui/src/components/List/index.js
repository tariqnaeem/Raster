import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import './List.css';

const List = ({items}) => {
  if(isEmpty(items)){
    return 'No items';
  }

  const renderListItems =  items.map((item, index) => {
    return (
        <li key={index}>{item.fileName}</li>
    );
  });

  return (
      <ul>
        {renderListItems}
      </ul>
  )
};
List.propTypes = {
    items: PropTypes.array.isRequired
  }

export default List;
