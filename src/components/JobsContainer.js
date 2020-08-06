import React from "react";
import styled from "styled-components";
import { JobItem } from "./JobItem";
import PropTypes from 'prop-types';

const JobsContainerStyles = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem 0;
`;

function JobsContainer({jobs, handleSetTags}) {
  return (
    <JobsContainerStyles>
      {
        jobs.length > 0 ? 
        (
          jobs.map(job => {
            return (
              <JobItem job={job} key={`${job.id}-${job.company}`} handleSetTags={handleSetTags}/>
            )
          })
        ) : null
      }
    </JobsContainerStyles>
  );
};

JobsContainer.propTypes = {
  jobs: PropTypes.array.isRequired,
  handleSetTags: PropTypes.func.isRequired
}.isRequired;

export { JobsContainer };