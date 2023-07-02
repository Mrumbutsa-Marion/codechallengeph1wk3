// make a Get to retrieve the film data
fetch('http://localhost:3000/films/1')
.then(response => response.json())
.then( data => {
    //getting the content from the fetch data
    const poster = data.poster;
    const title = data.title;
    const runtime = data.runtime;
    const capacity = data.capacity;
    const showtime = data.showtime;
    const tickets_sold = data.tickets_sold;
    const description = data.description;

    const TicketsAvailable = capacity - tickets_sold;

    const flatironMoviesElement = document.getElementById('flatiron-movies');
    flatironMoviesElement.innerHTML = `
    <img src="${poster}" alt="${title}">
    <h3>${title}</h3>
    <p>runtime: ${runtime}</p>
    <p>Showtime: ${showtime}</p>
    <p>Available tickets: ${TicketsAvailable}</p>
    `;

})
.catch(error => {
    console.log('Error;', error);
});
