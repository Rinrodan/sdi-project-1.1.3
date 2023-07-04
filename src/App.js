import './App.css';
import banner1 from './banner1.png'
// import person from './person.png'
import React, { useState, useEffect } from 'react';

// import RenderCastDuplicates from './components/RenderCastDuplicates';
// import RenderActorShows from './components/RenderActorShows';



function App() {
  const [actorResults, setActorResults] = useState([]); 
  // << LINE 24 << handleActorClick >> this is the results of the search bar, first names only
  const [actorId, setActorId] =useState([]); 
  // LINE 96 << handleActorSelectClick >> this is chaged by selecting an actor from the results
  // const [actorShows, setActorShows] = useState([]);
  const [shows, setShows] = useState([]); 
  //these are the shows that the selected actor has been in and used to return the entire cast
  const [actorDetails, setActorDetails] =useState([]); 
  // line 50 << setActorDetails >> the actor that is selected from the search results
  // console.log(actorId);
  

  const handleActorClick = (actorName) => {   //the user enters the actors name in to the search box below, <div className="actor-name-container">
    fetch(`https://api.tvmaze.com/search/people?q=${actorName}`)
      .then(response => response.text())
      .then(text => {
        if (text === 'null') {
          console.error('Invalid JSON response:', text);
      } else {
        const actor = JSON.parse(text);
        setActorResults(actor);
        setActorDetails([]);
        setShows([]);
        // console.log(actor);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};

useEffect(() => {
  if (actorId) {
    fetch(`https://api.tvmaze.com/people/${actorId}/`)
      .then((response) => response.json())
      .then((data) => {
        if (data === 'null') {
          console.error('Invalid JSON response:', data);
        } else {
          const selectedActor = JSON.parse(data);
          setActorDetails(selectedActor);
        }
      })
      .catch((error) => {
        console.error('Error fetching actor details:', error);
      });

    fetch(`https://api.tvmaze.com/people/${actorId}/castcredits`)
      .then((response) => response.json())
      .then((data) => {
        const showCodes = data
          .map((item) => {
            const href = item._links.show.href;
            const matches = href.match(/\/(\d+)$/);
            if (matches) {
              return matches[1];
            }
          })
          .filter(Boolean);

        Promise.all(
          showCodes.map((code) =>
            fetch(`https://api.tvmaze.com/shows/${code}?embed=cast`)
              .then((response) => response.json())
              .then((show) => ({
                id: show.id,
                name: show.name,
                image: show.image.medium,
                officialSite: show.officialSite,
                cast: show._embedded.cast.map((item) => ({
                  id: item.person.id,
                  name: item.person.name,
                  image: item.person.image.medium,
                }))
              }))
              .catch((error) => {
                console.error(`Error fetching show with code ${code}:`, error);
                return null; // Return null for failed requests
              })
          )
        ).then((shows) => {
          setShows(shows.filter(Boolean)); // Filter out null values from failed requests
        });
      })
      .catch((error) => {
        console.error('Error fetching cast credits:', error);
      });
  } else {
    setActorDetails([]);
    setShows([]);
  }
}, [actorId]);

function handleActorSelectClick(actorId) {
  setActorId(actorId);
}


  return (
    <div className="App">
      <div className="row">
        <header className="main-header" role="banner">
          <img src={banner1} className="banner" alt="Banner"/>
        </header>
      </div>
      <main className='main'>
        
        <h1>Costar Search</h1>
        <section className="actorsearchcontainer">
          <div className="actor-name-container">
            <label className="text">
              Actor's Name:
            </label>
            <input type="text" 
                  id="actorName" />
          </div>
          {/* <div className="number-radio-buttons text">
            <input type="radio" 
                    name="2-4" 
                    title="asdf"/> 
            <label>over 4</label>
              <input type="radio" 
                    name="2-4" 
                    title="asdf"/>
            <label className="text">2-4</label>
          </div> */}
          <div className="button-container">
            <button className="searchbutton text" onClick={() => handleActorClick(document.getElementById('actorName').value)}>
              Search
            </button>
          </div>
        </section>
        <section className="actorSelectionSection">
          {actorResults.map(actor => (
            <div key={actor.person.id} className='actorSelectionContainer'>
              {/* <button className="button text"
                    type="button"
                    value= "actorId"></button> */}
              <button className="button text shadow-small actor-button"
                    type="button"
                    value= {actor.person.id}
                    id="actorSelection"
                    onClick={() => handleActorSelectClick(document.getElementById('actorSelection').value)}>  
              <p id={actor.person.id} value={actor.person.name}>{actor.person.name}</p> {/* did not inlcude image because some search results do not have an image and it would break */}
              </button>
            </div>
          ))}
         
          </section>          
        <section className='show-card-results'>
          <ul>
            {shows.map(show => {
              return (
                <div key={show.id} className='show-card-container'>
                   <div key={actorId} className='selectedActor card'>
                    <p id="showtitle" value="showName">{show.name} </p>
                  </div>
                  
                </div>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  )
}

export default App;
// export { ActorShowsContext, ActorShowsProvider };
