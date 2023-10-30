import { useEffect, useState } from 'react'
import './App.css'
import {getMovies, getMoviesData} from './api/axiosConfig'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import { Home } from './pages/home/Home'
import Trailer from './components/triler/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {

  const [ movies, setMovies ] = useState([])
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovieData = async (movieId) => {
    try{
      const singleMovie = await getMoviesData(movieId);

      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const movies = await getMovies();
        setMovies(movies);
      } catch (error) {
        console.error('Error al obtener películas:', error);
      }
    })();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
          <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} reviews={reviews} setReviews={setReviews} movie={movie}/>} ></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
