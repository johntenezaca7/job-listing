import React, { useState, useEffect } from 'react';
import { Header, JobsContainer, FilterContainer } from "./components";
import Jobs from "./data.json";

function FilterData(tags, arrObj) {
  return arrObj.filter(obj => {
    // Make a list of all the tags that obj has
    let allTags = [...obj.languages, ...obj.tools, obj.role, obj.level].map(t => t.toLowerCase());

    return tags.every(tag => allTags.includes(tag.toLowerCase()));
  });
} 

function App() {
  const [allJobs, setJobs] = useState([]);
  const [tags, setTags] = useState([]);
  
  const AddToTagList = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const RemoveFromTagList = (tag) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(item => item !== tag));
    }
  };

  const ClearAllTags = () => {
    setTags([])
  };

  useEffect(() => {
    if (tags.length === 0) {
      setJobs(Jobs);
    } else {  
      setJobs( FilterData(tags, Jobs) ); 
    }
  }, [tags]);


  return (
    <>
      <Header />
      <FilterContainer tags={tags} handleSetTags={RemoveFromTagList} clearAllTags={ClearAllTags}/>
      <JobsContainer jobs={allJobs} handleSetTags={AddToTagList}/>
    </>
  );
}

export default App;
