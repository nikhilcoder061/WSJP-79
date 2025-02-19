import React, { useEffect, useState } from 'react'
import Input from './Input'
import Cards from './Cards'
import axios from 'axios';

export default function App() {

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const getMovies = async () => {
    let apiUrl;
    if (search == '') {
      apiUrl = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
    } else {
      apiUrl = `https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=${search}`
    }

    axios.get(apiUrl).then(
      (success) => {
        setMovies(success.data.results);
      }
    ).catch(
      (error) => {
        console.log(error);
      }
    )


    // const response = await fetch(apiUrl);
    // const data = await response.json();
    // const finalData = data.results;
    // setMovies(finalData);

  }

  // const searchMovie = (movieName) => {
  //   setSearch(movieName);
  // }

  useEffect(
    () => {
      getMovies();
    }, [search]
  )


  return (
    <div className='bg-gray-100 p-6'>
      <Input setSearch={setSearch} />
      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {
          movies.map(
            (movieData, movieIndex) => {
              return (
                <Cards movieData={movieData} key={movieIndex} />
              )
            }
          )
        }
      </div>
    </div>

  )
}
