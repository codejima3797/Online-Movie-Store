  // async function main() {
  // const movies = await fetch(`https://www.omdbapi.com/?apikey=447acd47&s=all`);
  // const moviesData = await movies.json();
  // const movieListEl = document.querySelector(".movies__list");

  // movieListEl.innerHTML = [moviesData].map((movie) => moviesHTML(movie)).join("");
  // console.log(moviesData)
  // }

  
  
  // function moviesHTML(movie) {
    //     return `<div class="movies">
  //                         <img src="https://movie.poster.com" alt="">
  //                         <p><b>Movie Title</b></p>
  //                         <p>0000</p>
  //                     </div>`;
  //   }
  
  
  // main()

  async function main() {
    const movies = await fetch("https://www.omdbapi.com/?apikey=447acd47&s=all");
    const moviesData = await movies.json();
    console.log(
      [moviesData].map(
        (movie) => `<div class="movies">
      <img src="https://movie.poster.com" alt="">
      <p><b>Movie Title</b></p>
      <p>0000</p>
  </div>`
      )
    );
  }

  main();