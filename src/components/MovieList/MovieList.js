import { Link, Navigate } from "react-router-dom";
import swal from "@sweetalert/with-react";
import { useEffect, useState } from "react";

const MovieList = () => {
  const token = sessionStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '1cde878bc7msh935bd8a257025d8p1169fcjsn0c1e9c332706',
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
      }
    };
    
    fetch('https://movies-app1.p.rapidapi.com/api/movies', options)
      .then(response => response.json())
      .then(response => setMoviesList(response.results))
      .catch(err => swal({
        icon: "warning",
        title: `Ocurrio un error: ${err}, intenta más tarde`,
      }));
  }, [setMoviesList]);

  // console.log(moviesList);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div className="row">
        {moviesList.map((movie)=>{
          return(
            <div className="col-3" key={movie._id}>
              <div className="card">
                <img src={movie.image}  alt="img" />
                <div className="card-body">
                  <h5 className="card-title">{movie.title.substring(0, 20)}...<br/>{movie.year}</h5>
                  <p className="card-text">
                    {movie.description.substring(0, 100)}...
                  </p>
                  <Link to={`/movie?movieID=${movie._id}`} className="btn btn-primary">
                    View detail
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
        
      </div>
    </>
  );
};

export default MovieList;
