// import React, { useState, useContext } from 'react';
// import App, { ActorShowsContext } from '../App';

// // function RenderActorShows() {
// //   const [actorShowtArray, setDuplicateCastArray] = useState([]);
// // //if there are duplicates in actorShows, then push the actor details object in to the duplicates array

// //   // return (
// //   //   <section className="actorresultscontainer">
// //   //     {castArray.map(actor => (
// //   //       <div key={actor.person.id}>
// //   //         <h2>{actor.person.name}</h2>
// //   //         <img src={actor.person.image.medium} alt={actor.person.name} />
// //   //       </div>
// //   //     ))}
// //   //   </section>
// //   // );
// // }
// function RenderActorShows() {
//     const [actorShows] = 
// useContext(ActorShowsContext);

// if (!actorShows || actorShows.length === 0) {
//     return <div>Error: No data found.</div>;
//   }

//     return (
//         <div>
//             {actorShows.map((show) => (
//                 <div key={show.id}>
//                         {show.cast.map((actor) => (
//                             <div key={actor.id}>
//                                 <p>{actor.name}</p>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>
//         );
// }
// export default RenderActorShows;
