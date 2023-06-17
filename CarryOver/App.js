import './App.css';
import './card.css';
import './styles.css';
import React, { useState, createContext } from 'react';
import GetCast from './components/GetCastCredits';// returns an array of cast members who also worked on the  selected {actorId}
import RenderActorCredits from './components/GetCastCredits'; // creats an array of shows selected {actorId} has worked on
import RenderGetCast from './components/RenderGetCast' 

export const UserContext = createContext();

function App() {
  const [actorResults, setActorResults] = useState([]);
  const [actorCredits, setActorCredits] = useState([]);
  const [actorId, setActorId] = useState(UserContext);
  const [creditIds, setCreditIds] = useState([]);
  


  const handleActorClick = (actorName) => {   //the user enters the actors name in to the search box below, <div className="actor-name-container">
    fetch(`https://api.tvmaze.com/search/people?q=${actorName}`)
      .then(response => response.json())
      .then(actor => {
        setActorResults(actor); 
        console.log(actor);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };
  const handleCreditClick = (actorId, index) => {  //received from 93
    fetch(`https://api.tvmaze.com/people/${actorId}/castcredits`)  //searched using actorId
      .then(response => response.json())
      .then(show => {
        setActorCredits(show, index); //set
        
  console.log(setActorCredits);
        
      })
      .catch(error => {
        console.error('Error:', error);
      });
      console.log(setActorCredits)

  };


  const showCreditIds = [
    { id: 49, name: 'Brooklyn Nine-Nine', img: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg', url: 'https://www.tvmaze.com/shows/49/brooklyn-nine-nine' },
    { id: 42, name: 'Sleepy Hollow', img: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/204166.jpg', url: 'https://www.tvmaze.com/shows/42/sleepy-hollow', summary: '<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it\'s about the men and women behind the badge.</p>' },
    { id: 134, name: 'Heroes', img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1904.jpg', url: 'https://www.tvmaze.com/shows/134/heroes', summary: '<p>This epic chronicles the lives of ordinary people who discover they possess extraordinary abilities. As a total eclipse casts a shadow across the globe, viewers follow a genetics professor in India whose father\'s disappearance leads him to uncover a secret theory there are people with super powers living among us. A young dreamer tries to convince his politician brother that he can fly. A high school cheerleader learns that she is totally indestructible. A Las Vegas stripper, struggling to make ends meet to support her young son, uncovers that her mirror image has a secret. A prison inmate mysteriously finds himself waking up outside of his cell. A gifted artist, whose drug addiction is destroying his life and the relationship with his girlfriend, can paint the future. A down-on-his-luck beat cop can hear people\'s thoughts, including the secrets of a captured terrorist. In Japan, a young man develops a way to stop time through sheer will power. Their ultimate destiny is nothing less than saving the world.</p>' },
    { id: 3, name: 'Bitten', img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg', url: 'https://www.tvmaze.com/shows/3/bitten', summary: "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>" },
    { id: 425, name: 'The Passing Bells', img: 'https://static.tvmaze.com/uploads/images/medium_portrait/2/7487.jpg', url: 'https://www.tvmaze.com/shows/425/the-passing-bells', summary: '<p>World War I drama. At the outbreak of war, two teenage boys - one German and one British - defy their parents to sign up.</p>' }
  ];

  const cast = GetCast({ showCreditIds });
  <GetCast cast={cast} />

  const groupedCast = cast.reduce((acc, person) => {
    const existingPerson = acc.find(p => p.id === person.id);
    if (existingPerson) {
      existingPerson.shows.push(person.show);
    } else {
      acc.push({
        ...person,
        shows: [person.show]
      });
    }
    return acc;
  }, []);
  


  return (
    <div className="App">
      <UserContext.Provider value={{ actorId, showCreditIds }}>
        <GetCast />
        <RenderActorCredits />
      </UserContext.Provider>
      <header className="App-header">
    
    
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
                    value="Search"
                    onClick={() => handleActorClick(document.getElementById('actorName').value)}>
              Search
            </button>
          </div>
        </section>
        <section className="actorresultscontainer">
          {actorResults.map(actor => (
            <div key={actor.person.id}>
              
              <button className="button text"
                    type="button"
                    value= "actorId"
                    id={actor.person.id}
                    onClick={() => handleCreditClick(actor.person.id)}>   {/* actor.person.id gets pushed to line 23 /> */}
                    
              <h2 id="actorId"value="actor.person.name">{actor.person.name}</h2>
              
              {/* <img src={actor.person.image.medium} alt={actor.person.name} /> */}
              </button>
            </div>
          ))}
        </section>
        <section className="actor-results-container">
          {actorCredits.map(show => (
            <div key={show.id}>
              <button className="button text"
                    type="button"
                    value="Search"
                    onClick={() => handleCreditClick(document.getElementById('.person.id').value)}>
              <h2>{show.name}</h2>
               {/* <img src={actor.person.image} alt={actor.person.name} />   */}
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
        </section>
      </main>
    </div>
  );
}

export default App;



