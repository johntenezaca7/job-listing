import React from "react";
import RemoveItemSvg from "./images/icon-remove.svg";
import { FilterContainerStyles } from "./styles";
import PropTypes from 'prop-types';

function FilteredItem({text, handleSetTags}) {
  return (
    <div className="filtered-item">
      <div className="text-wrapper">
      <p>{text}</p>
      </div>
      <div className="icon-wrapper" onClick={() => handleSetTags(text)}>
        <img src={RemoveItemSvg} alt="Remove Item"/>
      </div>
    </div>
  );
};

FilteredItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleSetTags: PropTypes.func.isRequired
}.isRequired;

function FilterContainer({tags, handleSetTags, clearAllTags}) {
  return (
    <div style={{ padding: '0 1.5rem 0'}}>
      <FilterContainerStyles>
        <div className="tags-container">
          { 
            tags.length > 0 ?
            (
              tags.map(tag => {
                return (
                  <FilteredItem key={tag} text={tag} handleSetTags={handleSetTags}/>
                );
              })
            ): (<p className="placeholder-text">Filter by tags!</p>)
          }
        </div>
        <div>
          <p className="clear-btn" onClick={clearAllTags}>Clear</p>
        </div>
      </FilterContainerStyles>
    </div>
  )
};

FilterContainer.propTypes = {
  tags: PropTypes.array.isRequired,
  handleSetTags: PropTypes.func.isRequired,
  clearAllTags: PropTypes.func.isRequired
}.isRequired;


export { FilterContainer };