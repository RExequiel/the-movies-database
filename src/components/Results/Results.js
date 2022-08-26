import swal from "@sweetalert/with-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import addOrRemoveFavourite from "../AddOrRemoveFavourite";

const Results = () => {
    let query = new URLSearchParams(window.location.search);
    let keyword = query.get("keyword");

    const [results, setResults] = useState([]);

    useEffect(()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '1cde878bc7msh935bd8a257025d8p1169fcjsn0c1e9c332706',
                'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com'
            }
        };
        
        fetch(`https://movies-app1.p.rapidapi.com/api/movies?query=${keyword}`, options)
            .then(response => response.json())
            .then(response => {
                const results = response.results;
                if(results.length === 0){
                    swal({
                        title: `La busqueda no tiene resultados!`,
                      })
                }
                setResults(results);
            })
            .catch(err => swal({
                icon: "warning",
                title: `Ocurrio un error: ${err}, intenta más tarde`,
              }));
    },[keyword]);
    
    // console.log(results);
    return ( 
        <>
        <h2>Resultados de la busqueda: {keyword}</h2>
        {results.length === 0 && <h3>No hay resultados</h3> }
        <div className="row">
        {results.map((movie)=>{
          return(
            <div className="col-3" key={movie._id}>
              <div className="card">
                <img src={movie.image}  alt="img" />
                <button 
                  className="favourite-btn"
                  onClick={addOrRemoveFavourite}
                  data-movie-id={movie._id}
                >
                  💛
                </button>
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
}
 
export default Results;