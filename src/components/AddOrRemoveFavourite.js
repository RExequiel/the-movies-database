import swal from "@sweetalert/with-react";
import { useEffect, useState } from "react";

export const useFavs = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(()=>{
        const favsInLocal = localStorage.getItem('favs');
        if(favsInLocal != null){
            const favsArray = JSON.parse(favsInLocal);
            setFavourites(favsArray);
        }
    },[]);
    return favourites;
}

const addOrRemoveFavourite = e => {
  
    const favsMovies = localStorage.getItem("favs");

  let tempMoviesFavourite;
  if (favsMovies == null) {
    tempMoviesFavourite = [];
  } else {
    tempMoviesFavourite = JSON.parse(favsMovies);
  }

  const btn = e.currentTarget;
  const parent = btn.parentElement;
  const imgURL = parent.querySelector("img").getAttribute("src");
  const title = parent.querySelector("h5").innerText;
  const description = parent.querySelector("p").innerText;
  const id = btn.getAttribute("data-movie-id");
  const dataMovie = {
    imgURL,
    title,
    description,
    id,
  };


  let movieIsInArray = tempMoviesFavourite.find(
    (oneMovie) => oneMovie.id === dataMovie.id
  );
  
  if (!movieIsInArray) {
    tempMoviesFavourite.push(dataMovie);
    localStorage.setItem("favs", JSON.stringify(tempMoviesFavourite));
    btn.classList.add('favourite-add');
    swal({
      title: "Se agrego la pelicula a Favoritos",
    });
  } else {
    let movieToDelete = tempMoviesFavourite.filter(
      (oneMovie) => oneMovie.id !== dataMovie.id
    );
    localStorage.setItem("favs", JSON.stringify(movieToDelete));
    btn.classList.remove('favourite-add');
    swal({
      icon: "warning",
      title: "Se elimino la pelicula de Favoritos",
    })
  } 
  //console.log(results);
};

export default addOrRemoveFavourite;
