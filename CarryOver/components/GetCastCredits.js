import { useState, useEffect, useContext } from 'react';
import creditIds from '../App.js';
import { UserContext } from '../App.js';

function GetCast({ creditIds, cast }) {
	const [costar, setCostar] = useState([]);
	const actorId = useContext(UserContext); 


	useEffect(() => {
    async function fetchCast() {
		const cast = [];
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
export default GetCast;


// function GetCast({ showCreditIds }) {
// 	const [costar, setCostar] = useState([]);

// 	useEffect(() => {
//     async function fetchCast() {
// 		const cast = [];
// 		for (const show of showCreditIds) {
// 			const response = await fetch(`https://api.tvmaze.com/shows/${show.id}/cast`);
// 			const data = await response.json();
// 			const castData = data.map(c => ({
// 				id: c.person.id,
// 				name: c.person.name,
// 				image: c.person.image.medium,
// 				url: c.person.url,
// 				show: show.name,
// 				showUrl: show.url
//     }));
//         cast.push(...castData);
//     }
//     setCostar(cast);
//     }

//     fetchCast();
// 	}, []);

// 	return costar;
// } 
// export default GetCast;


// const groupedCast = cast.reduce((acc, person) => {
// 	const existingPerson = acc.find(p => p.id === person.id);
// 	if (existingPerson) {
// 	  existingPerson.shows.push(person.show);
// 	} else {
// 	  acc.push({
// 		...person,
// 		shows: [person.show]
// 	  });
// 	}
// 	return acc;
//   }, []);
// const showCreditIds = [     
// 	{id: 49, 
// 		name: 'Brooklyn Nine-Nine', 
// 		img: 'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007484.jpg', 
// 		url: 'https://www.tvmaze.com/shows/49/brooklyn-nine-nine'},     
// 	{id: 42, 
// 		name: 'Sleepy Hollow', 
// 		img: 'https://static.tvmaze.com/uploads/images/medium_portrait/81/204166.jpg', 
// 		url: 'https://www.tvmaze.com/shows/42/sleepy-hollow',
// 		summary: '<p><b>Brooklyn Nine-Nine</b> is an ensemble comedy about a talented-but-carefree detective, a by-the-book police captain and their precinct colleagues. While based in the workplace, Brooklyn Nine-Nine is not really about the job – it\'s about the men and women behind the badge.</p>'},     
// 	{id: 134, 
// 		name: 'Heroes', 
// 		img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/1904.jpg', 
// 		url: 'https://www.tvmaze.com/shows/134/heroes', 
// 		summary: '<p>This epic chronicles the lives of ordinary people who discover they possess extraordinary abilities. As a total eclipse casts a shadow across the globe, viewers follow a genetics professor in India whose father\'s disappearance leads him to uncover a secret theory there are people with super powers living among us. A young dreamer tries to convince his politician brother that he can fly. A high school cheerleader learns that she is totally indestructible. A Las Vegas stripper, struggling to make ends meet to support her young son, uncovers that her mirror image has a secret. A prison inmate mysteriously finds himself waking up outside of his cell. A gifted artist, whose drug addiction is destroying his life and the relationship with his girlfriend, can paint the future. A down-on-his-luck beat cop can hear people\'s thoughts, including the secrets of a captured terrorist. In Japan, a young man develops a way to stop time through sheer will power. Their ultimate destiny is nothing less than saving the world.</p>'},  
// 	{id: 3, 
// 		name: 'Bitten', 
// 		img: 'https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg', 
// 		url: 'https://www.tvmaze.com/shows/3/bitten',
// 		summary: "<p>Based on the critically acclaimed series of novels from Kelley Armstrong. Set in Toronto and upper New York State, <b>Bitten</b> follows the adventures of 28-year-old Elena Michaels, the world's only female werewolf. An orphan, Elena thought she finally found her \"happily ever after\" with her new love Clayton, until her life changed forever. With one small bite, the normal life she craved was taken away and she was left to survive life with the Pack.</p>"},     
// 	{id: 425, 
// 		name: 'The Passing Bells', 
// 		img: 'https://static.tvmaze.com/uploads/images/medium_portrait/2/7487.jpg', 
// 		url:'https://www.tvmaze.com/shows/425/the-passing-bells', 
// 		summary: '<p>World War I drama. At the outbreak of war, two teenage boys - one German and one British - defy their parents to sign up.</p>'} 
// ];  


// GetCast(showCreditIds).then(console.log);




