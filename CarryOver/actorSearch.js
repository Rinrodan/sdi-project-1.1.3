class ActorSearch {
  constructor(query, actorSelectedId) {
    this.query = query;
    console.log(query + " (should be Fname Lname)");
    this.actorSelectedId = actorSelectedId;
    console.log(this.actorSelectedId + " (should be id#)");
    console.log(this.shows + " (should be shows)");
  }
  async searchActor() {
    const url = `https://api.tvmaze.com/search/people?q=${this.query}`;
    console.log(url);
    if (typeof this.query == 'number') {
      throw new Error('Query must be a string');
    };
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      return data.map(item => ({ 
        name: item.person.name, 
        id: item.person.id 
      }));
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  async actorSelection() {
    const url = `https://api.tvmaze.com/people/${this.actorSelectedId}/castcredits?embed=show`;
    console.log(url + " (should be https://api.tvmaze.com/people/####/castcredits?embed=show)");
    try {
      const response = await fetch(url);
      const data = await response.json();
      // Process the data
      const shows = data.map(item => ({
        name: item._embedded.show.name,
        // summary: item._embedded.show.summary,
        // image: item._embedded.show.image.medium
      }));
     return shows;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  async mainActorShows () {
    const url = `https://api.tvmaze.com/people/${this.actorSelectedId}/castcredits?embed=show`;
    console.log(url + '  show credits url');
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      const results = jsonData.map(element => element._embedded.show.id);
      console.log(results);
      return results;
    } catch(error) {
      document.getElementsByName('error').innerHTML = error;
      return [];
    }
//     [
//       49,   692,  2129,
//     4628,  1445, 22525,
//    17004, 38278,   289,
//    55427, 64557
//  ]
  }
  
  const showIds = [49, 692, 2129, 4628, 1445, 22525, 17004, 38278, 289, 55427, 64557];
const castPromises = [];

showIds.forEach(showId => {
  const url = `https://api.tvmaze.com/shows/${showId}/cast`;
  castPromises.push(fetch(url).then(response => response.json()));
});

Promise.all(castPromises)
  .then(results => {
    const castList = [];
    results.forEach((cast, index) => {
      const castMembers = cast.map(member => member.person.name);
      castList.push({ id: showIds[index], names: castMembers });
    });
    console.log(castList);
  })
  .catch(error => console.error(error));
}

module.exports = ActorSearch;

     