import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello</h1>
      </header>
      <main>
        <section className="actorsearchcontainer">
          <div className="actor-name-container">
            <label className="text">
              Actor's Name:
            </label>
            <input type="text" 
                  id="actorName" />
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
                    value="Search">
                      {/* <button className="button text"
                    type="button"
                    value="Search"
                    onClick={() => handleActorClick(document.getElementById('actorName').value)}></button> */}
              Search
            </button>
          </div>
        </section>
        {/* <section className="actorresultscontainer">
          {actorResults.map(actor => (
            <div key={actor.person.id}>
              <button className="button text"
                    type="button"
                    value= "actorId"></button>
              <button className="button text"
                    type="button"
                    value= "actorId"
                    id={actor.person.id}
                    onClick={() => handleCreditClick(actor.person.id)}>   
                    
              <h2 id="actorId"value="actor.person.name">{actor.person.name}</h2>
              
              <img src={actor.person.image.medium} alt={actor.person.name} />
              </button>
            </div>
          ))}
        </section> */}
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
