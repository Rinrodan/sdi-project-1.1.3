import React, { useState, useEffect } from 'React';

function SearchForActor () { 
    const [actorName, setActorName] = useState(''); // store the actor name entered by the user 
    const [searchResults, setSearchResults] = useState([]); // store the search results as an array of objects

useEffect(() => {
  // fetch the data from the API whenever the actorName changes
  if (actorName) {
    fetch(`https://api.tvmaze.com/search/people?q=${actorName}`)
    .then(response => response.json())
    .then(data => {
      // update the search results state with the response data
      setSearchResults(data);
    })
    .catch(error => {
      // handle the error here
      console.error('Error:', error);
      // you can also set an error state or display a message to the user
    })
  }
}, [actorName]); // pass actorName as a dependency to useEffect

const handleChange = (event) => {
  // update the actorName state with the input value
  setActorName(event.target.value);
}

const handleActorClick = (name) => {
  // handle the click event on each button
  // you can do whatever you want with the name parameter
  // for example, you can display it in an alert or console.log it
  alert(name);
}

return ( 
  
  <main>
        <section className="actorsearchcontainer">
          <div className="actor-name-container">
            <label className="text">
              Actor's Name:
            </label>
            <input value={actorName} onChange={handleChange} />
          </div>
          <div className="number-radio-buttons text">
            <input type="radio" 
                    name="2-4" 
                    title="asdf"/> 
            <label>over 4</label>
              <input type="radio" 
                    name="2-4" 
                    title="asdf"/>
            <label className="text">2-4</label>
          </div>
          <div className="button-container">
            <button className="button text"
                    type="button"
                    value="Search"
                    onClick={() => handleActorClick(document.getElementById('actorName').value)}>
              Search
            </button>
          </div>
        </section>
  </main>
) 
} export default SearchForActor;