import './App.css';
import banner1 from './banner1.png'
import person from './person.png'
import React, { useState } from 'react';

function App() {
  const [actorResults, setActorResults] = useState([]);

  const handleActorClick = (actorName) => {   //the user enters the actors name in to the search box below, <div className="actor-name-container">
    fetch(`https://api.tvmaze.com/search/people?q=${actorName}`)
      .then(response => response.text())
      .then(text => {
        if (text === 'null') {
          console.error('Invalid JSON response:', text);
      } else {
        const actor = JSON.parse(text);
        setActorResults(actor);
        console.log(actor);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
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
        <section className="actorresultscontainer">
          {actorResults.map(actor => (
            <div key={actor.person.id} className='acttorresultselection'>
              {/* <button className="button text"
                    type="button"
                    value= "actorId"></button> */}
              <button className="button text"
                    type="button"
                    value= "actorId"
                    id={actor.person.id}>
                    {/* onClick={() => handleCreditClick(actor.person.id)}   */}
                    
              <h2 id="actorId"value="actor.person.name">{actor.person.name}</h2>
              
              {/* <img src={actor.person.image.medium || actor.person.image.original || {person}} alt={actor.person.name} /> */}
              </button>
            </div>
          ))}
        </section>
        {/* <section className="actor-results-container">
          {actorCredits.map(show => (
            <div key={show.id}>
              <button className="button text"
                    type="button"
                    value="Search"
                    onClick={() => handleCreditClick(document.getElementById('.person.id').value)}>
              <h2>{show.name}</h2>
              </button>
            </div> 
          ))}
          <div className="actor-grid">
        {groupedCast.map(person => (
          <div key={person.id} className='actorCard'>
            <img className='actorCardImage' src={person.image} alt={person.name} />
            <h2>{person.name}</h2>
            <p>Appeared in: {person.shows.join(', ')}</p>
          </div>
        ))}
      </div>
        </section> */}
      </main>
    </div>
  );
}

export default App;
