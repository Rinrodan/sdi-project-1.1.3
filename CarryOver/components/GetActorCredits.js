import { useState, useEffect, useContext } from 'react';
import creditIds from '../App.js/index.js';
import { UserContext } from '../App.js/index.js';

function GetCast({ creditIds, cast }) {
	const [costar, setCostar] = useState([]);
	const actorId = useContext(UserContext); 


	useEffect(() => {
    async function fetchActor() {
		const actorShows = [];
		for (const show of creditIds) {
			const response = await fetch(`https://api.tvmaze.com/shows/${show.id}/cast`);
			const data = await response.json();
			const castData = data.map(c => ({
				id: c.person.id,
				name: c.person.name,
				image: c.person.image.medium,
				url: c.person.url,
				show: show.name,
				showUrl: show.url
    }));
        cast.push(...castData);
    }
    setCostar(cast);
    }

    fetchCast();
	}, []);

	return costar;
} 
export default FetchC;