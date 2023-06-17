
import React, { useState } from 'react';
import { searchActors } from './components/api';

function RenderActorResults() {
  const [actorResults, setActorResults] = useState([]);
//  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="actorresultscontainer">
      {actorResults.map(actor => (
        <div key={actor.person.id}>
          <h2>{actor.person.name}</h2>
          <img src={actor.person.image.medium} alt={actor.person.name} />
        </div>
      ))}
    </section>
  );
}

export default RenderActorResults;



// const handleActorClick = (actorName) => {
//   fetch(`https://api.tvmaze.com/search/people?q=${actorName}`)
//     .then(response => response.json())
//     .then(actor => {
//       setActorResults(actor);
//       console.log(actor);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// };
  // return (
//   <ul>
//   {actorResults.map(actor => (
//     <li key={index}>{actor}</li>
//     ))}
//   </ul>

//   )};

// const actorName = event => {
//   setSearchTerm(event.target.value.toLowerCase());
// };

// useEffect(() => {

//     fetch(`https://api.tvmaze.com/search/people?q=${searchTerm}`)
//       .then(response => response.json())
//       .then(data => {
//         setActorResults(data.results);
//        console.log(data.results);
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });

//     }, [searchTerm]);

  
  // };

// return ();



// return (
//   <ul>
//   {actorResults.map(actor => (
//     <li key={actor}>{actor}</li>
//     ))}
//   </ul>
// );



//   console.log(pokemonList)

// return pokemonList.map((pokemon) => {
//        return (
//         <li>
//         {pokemon}
//         </li>

//     );
// });


//   const handlePokemonClick = (pokemon, index) => {
//     fetch(pokemon.url)
//       .then(response => response.json())
//       .then(pokemonData => {
//         setSelectedPokemon({ ...pokemonData, index });
//       })
//       .catch(error => {
//         console.error('Error:', error);
//       });
//   };

// return (
//     <ul>
//         {pokemonList.map((pokemon, index) => (
//           //onClick={() => { HandleOnClick }} 

//             <li className="Pokedex" key={index}> 
//              {/* <button /*onClick={<Popup />} */ }
//                 <img src={`https://api.tvmaze.com/search/people?q=${this.query}`}/>
//                 {pokemon.name}
//              {/* </button>  */}
//           </li>

//         ))}
//     </ul>
// )














// class ActorSearch {
//     constructor(query, actorSelectedId) {
//       this.query = query;
//       console.log(query + " (should be Fname Lname)");
//       this.actorSelectedId = actorSelectedId;
//       console.log(this.actorSelectedId + " (should be id#)");
//       console.log(this.shows + " (should be shows)");
//     }
//     async searchActor() {
//       const url = `https://api.tvmaze.com/search/people?q=${this.query}`;
//       console.log(url);
//       if (typeof this.query == 'number') {
//         throw new Error('Query must be a string');
//       };
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         // console.log(data);
//         return data.map(item => ({ 
//           name: item.person.name, 
//           id: item.person.id 
//         }));
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//       }
//     };
//     async actorSelection() {
//       const url = `https://api.tvmaze.com/people/${this.actorSelectedId}/castcredits?embed=show`;
//       console.log(url + " (should be https://api.tvmaze.com/people/####/castcredits?embed=show)");
//       try {
//         const response = await fetch(url);
//         const data = await response.json();
//         // Process the data
//         const shows = data.map(item => ({
//           name: item._embedded.show.name,
//           // summary: item._embedded.show.summary,
//           // image: item._embedded.show.image.medium
//         }));
//        return shows;
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         throw error;
//       }
//     };
//     async mainActorShows () {
//       const url = `https://api.tvmaze.com/people/${this.actorSelectedId}/castcredits?embed=show`;
//       console.log(url + '  show credits url');
//       try {
//         const response = await fetch(url);
//         const jsonData = await response.json();
//         const results = jsonData.map(element => element._embedded.show.id);
//         console.log(results);
//         return results;
//       } catch(error) {
//         document.getElementsByName('error').innerHTML = error;
//         return [];
//       }
//   //     [
//   //       49,   692,  2129,
//   //     4628,  1445, 22525,
//   //    17004, 38278,   289,
//   //    55427, 64557
//   //  ]
//     }

//     const showIds = [49, 692, 2129, 4628, 1445, 22525, 17004, 38278, 289, 55427, 64557];
//   const castPromises = [];

//   showIds.forEach(showId => {
//     const url = `https://api.tvmaze.com/shows/${showId}/cast`;
//     castPromises.push(fetch(url).then(response => response.json()));
//   });

//   Promise.all(castPromises)
//     .then(results => {
//       const castList = [];
//       results.forEach((cast, index) => {
//         const castMembers = cast.map(member => member.person.name);
//         castList.push({ id: showIds[index], names: castMembers });
//       });
//       console.log(castList);
//     })
//     .catch(error => console.error(error));
//   }
  
//   module.exports = ActorSearch;
  
