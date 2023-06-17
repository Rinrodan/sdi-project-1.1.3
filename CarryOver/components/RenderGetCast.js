import React, { useState } from 'react';
import { GetCast } from './GetCastCredits';

function RenderGetCast() {
  const [castArray, setCastArray] = useState([]);
//  const [searchTerm, setSearchTerm] = useState('');

  return (
    <section className="actorresultscontainer">
      {castArray.map(actor => (
        <div key={actor.person.id}>
          <h2>{actor.person.name}</h2>
          <img src={actor.person.image.medium} alt={actor.person.name} />
        </div>
      ))}
    </section>
  );
}

export default RenderGetCast;