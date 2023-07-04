import React, { useState, useContext } from 'react';
// import { searchActorCredits } from './api';
import UserContext from './App';

function RenderActorCredits() {
    const [actorCredits, setActorCredits] = useState([]);
    const userId = useContext(UserContext);

const handleActorClick = async (actorId) => {
    const data = await searchActorCredits(actorId);
    setActorCredits(data);
};
console.log();
return (
    <section className="actor-results-container">
        {actorResults.map(actor => (
        <div key={person.id}>
            <h2>{actor.person.name}</h2>
            <img src={actor.person.image.medium} alt={actor.person.name} />
        </div>
    ))}
    </section>
);
}

export default RenderActorCredits;