import { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import swal from "@sweetalert/with-react";

const Movie = () => {
  const token = sessionStorage.getItem("token");

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://movies-app1.p.rapidapi.com/api/movie/${movieID}`,
      headers: {
        "X-RapidAPI-Key": "1cde878bc7msh935bd8a257025d8p1169fcjsn0c1e9c332706",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setMovieDetail(response.data.result);
      })
      .catch((err) =>
        swal({
          icon: "warning",
          title: `Ocurrio un error: ${err}, intenta más tarde`,
        })
      );
  }, [movieID]);

  //   console.log(movieDetail);
  return (
    <>
      {!token && <Navigate to="/" />}

      {!movieDetail && (
        <div className="container">
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Cargando...
          </button>
        </div>
      )}
      {movieDetail && (
        <div className="container">
          <div className="row">
            <h3>{movieDetail.title}</h3>
            <br />
            <br />
            <div className="col-3">
              <img src={movieDetail.image} className="img-fluid" alt="img" />
            </div>
            <div className="col-8">
              <h6>
                <strong>Titulo Original: </strong>
                {movieDetail.titleOriginal}
              </h6>
              <h6>
                <strong>Fecha: </strong>
                {movieDetail.release}
              </h6>
              <h6>
                <strong>Calificación: </strong>
                {movieDetail.rating}
              </h6>
              <strong>Genero: </strong>
              {movieDetail.genres.map((gen) => (
                <li key={gen.uuid}>{gen.name}</li>
              ))}
              <br />
              <strong>Reseña: </strong>
              <p>{movieDetail.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
