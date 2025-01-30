const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const container = document.querySelector(".container");
const movieName = document.querySelector("#movieName");

// get movies list from API start

const getMovies = async (api) => {
    const movieData = await fetch(api);
    const finalMovieData = await movieData.json();
    const movieList = finalMovieData.results;
    showMovies(movieList);
}

// get movies list from API End

// show movies start

const showMovies = (allMovies) => {
    for (let movie of allMovies) {
        container.innerHTML += ` <div class="item">
                                    <div>
                                    <img width="100%" height="350px"
                                        src=${IMGPATH + movie.poster_path} alt="">
                                    </div>
                                    <div class="detail">
                                    <h3>${movie.title}</h3>
                                    <h5>Rating : ${movie.vote_average.toFixed(1)} <span style="color: gray;">(${movie.vote_count})</span></h5>
                                    <br>
                                    <h4>Overview</h4>
                                    <p>
                                    ${movie.overview}
                                    </p>
                                    </div>
                                </div>`
    }
}

// show movies end

movieName.addEventListener(
    'keyup', () => {
        if (movieName.value != '') {
            container.innerHTML = ""
            getMovies(SEARCHAPI + movieName.value)
        } else {
            getMovies(APIURL)
        }
    }
)


getMovies(APIURL)


