import React from "react";
import { JobItemStyles } from "./styles";

function JobItem({ job, handleSetTags }) {
  const {
    company,
    logo,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  } = job,
    allTags = [role, level, ...languages, ...tools],
    imgUrl = require(`${logo}`);

  return (
    <JobItemStyles>
      <div className="left-side">
        <div className="job-logo">
          <img src={imgUrl} alt={company} />
        </div>
        <div className="details-container">
          <div className="details-row">
            <h4 className="company">{company}</h4>
            {job.new ? (<p className="new-listing">New!</p>) : null}
            {job.featured ? (<p className="featured-listing">Featured</p>) : null}
          </div>
          <div className="details-row details-row--position">
            <h3>{position}</h3>
          </div>
          <div className="details-row details-row--dot-items">
            <p className="dot-item">{postedAt}</p>
            <p className="dot-item">{contract}</p>
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="details-border"></div>
      <div className="right-side">
        {
          allTags.length > 0 ?
            (
              allTags.map(tag => {
                return ( 
                  <p className="tag-item" key={tag} onClick={() => handleSetTags(tag)}>{tag}</p>
                );
              })
            ) : null
        }
      </div>
    </JobItemStyles>
  );
};

export { JobItem };