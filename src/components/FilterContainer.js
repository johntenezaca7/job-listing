import React from "react";
import RemoveItemSvg from "./images/icon-remove.svg";
import { FilterContainerStyles } from "./styles";

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

export { FilterContainer };