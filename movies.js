  const movieListEl = document.querySelector(".movies__list");
  const id = localStorage.getItem("id");
  localStorage.setItem("id", id);


  async function onSearchChange(event) {
    const id = event.target.value;
    showMovies(id);
  }

  function searchButton() {
    const id = onSearchChange(id);
    showMovies(id);
  }
  
  async function showMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?apikey=447acd47&s=${id}`);
    const moviesData = await movies.json();
    movieListEl.innerHTML = 
    moviesData.Search.map((movie) => movieHTML(movie)).join("");
  }

  
  function movieHTML(movie) {
      return `<div class="movies">
      <img class="movie__poster" src=${movie.Poster} alt="">
      <p class="movie__title"><b>${movie.Title} <span class="movie__year">(${movie.Year})</span></b></p>
      </div>`;}
      
      
showMovies(id);