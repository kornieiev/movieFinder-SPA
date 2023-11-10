const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmExZTQzYTY5NjQxYWQzYTdkZWZlZjIwMGJhMDdkOCIsInN1YiI6IjY0ODA3YjgzYmYzMWYyMDExZDQxNWU3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ksZZ1upa3Zr_WyjRmw4RGhXYrHQMIjUphgwFV2WUWlw',
  },
};

async function fetchData() {
  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export default fetchData();

// /trending/get-trending список самых популярных фильмов на сегодня для создания коллекции на главной странице.
// https://api.themoviedb.org/3/trending/movie/day?language=en-US
// https://api.themoviedb.org/3/trending/movie/day?language=en-US
// /search/search-movies поиск кинофильма по ключевому слову на странице фильмов.
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1
// /movies/get-movie-details запрос полной информации о фильме для страницы кинофильма.
// https://api.themoviedb.org/3/movie/movie_id?language=en-US
// https://api.themoviedb.org/3/movie/movie_id?language=en-US
// /movies/get-movie-credits запрос информации о актёрском составе для страницы кинофильма.
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
// https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US
// /movies/get-movie-reviews запрос обзоров для страницы кинофильма.
// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1
// https://api.themoviedb.org/3/movie/movie_id/reviews?language=en-US&page=1
