import React, { useState } from 'react';
import App, { ActorShowsContext } from '../App';

function RenderCastDuplicates() {
  const [duplicateCastArray, setDuplicateCastArray] = useState([]);
//if there are duplicates in actorShows, then push the actor details object in to the duplicates array

const duplicates = shows[0].cast.reduce((acc, curr) => {
  acc[curr.id] = ++acc[curr.id] || 0;
  return acc;
}, {});

console.log(duplicates);
  // return (
  //   <section className="actorresultscontainer">
  //     {castArray.map(actor => (
  //       <div key={actor.person.id}>
  //         <h2>{actor.person.name}</h2>
  //         <img src={actor.person.image.medium} alt={actor.person.name} />
  //       </div>
  //     ))}
  //   </section>
  // );
}

export default RenderCastDuplicates;