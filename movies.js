const movieListEl = document.querySelector(".movies__list");
const searchInputEl = document.querySelector(".search__bar--input");
const filterEl = document.querySelector("#filter");
const defaultMovie = `https://www.omdbapi.com/?apikey=447acd47&s=aaa`; 
let currentMovies = []; 

const id = localStorage.getItem("id") || defaultMovie; 
localStorage.setItem("id", id);

async function onSearchChange(event) {
  const searchValue = event.target.value.trim(); 
  if (searchValue) {
    localStorage.setItem("id", searchValue);
    await showMovies(searchValue);
  }
}

function searchButton() {
  const searchValue = searchInputEl.value.trim();
  if (searchValue) {
    localStorage.setItem("id", searchValue);
    showMovies(searchValue);
  }
}

async function showMovies(id = defaultMovie) {
  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=447acd47&s=${id}`);
    const moviesData = await response.json();

    if (moviesData.Response === "True") {
      currentMovies = moviesData.Search; 
      movieListEl.innerHTML = currentMovies.map((movie) => movieHTML(movie)).join("");
    } else {
      movieListEl.innerHTML = `<p>No results found for "${id}".</p>`;
    }
  } catch (error) {
    movieListEl.innerHTML = `<p>Error loading movies. Please try again later.</p>`;
    console.error("Error fetching movies:", error);
  }
}

function movieHTML(movie) {
  return `<div class="movies">
    <img class="movie__poster" src="${movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}" alt="Movie poster">
    <p class="movie__title">
      <b>${movie.Title} <span class="movie__year">(${movie.Year})</span></b>
    </p>
  </div>`;
}

filterEl.addEventListener("change", () => {
  const filterValue = filterEl.value;

  let sortedMovies = [...currentMovies]; // this is copying the values ensuring we aren't coming across issues
  if (filterValue === "RECENT") {
    sortedMovies.sort((a, b) => b.Year - a.Year);
  } else if (filterValue === "A_TO_Z") {
    sortedMovies.sort((a, b) => a.Title.localeCompare(b.Title));
  } else if (filterValue === "Z_TO_A") {
    sortedMovies.sort((a, b) => b.Title.localeCompare(a.Title));
  }

  movieListEl.innerHTML = sortedMovies.map((movie) => movieHTML(movie)).join("");
});

showMovies(id);