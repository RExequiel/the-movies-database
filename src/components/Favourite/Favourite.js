import { Navigate } from "react-router-dom";
import { useFavs } from "../AddOrRemoveFavourite";

const Favourite = () => {
    const token = sessionStorage.getItem("token");

    let favourites = useFavs();
    return ( 
        <>
            {!token && <Navigate to='/' />}
            <h4>Sección de Favoritos</h4>
            <div className="row">
                {favourites.map((movie)=>{
                return(
                    <div className="col-3" key={movie._id}>
                        <div className="card">
                            <img src={movie.imgURL}  alt="img" />
                            <div className="card-body">
                            <h5 className="card-title">{movie.title.substring(0, 20)}...<br/>{movie.year}</h5>
                            <p className="card-text">
                                {movie.description.substring(0, 100)}...
                            </p>
                            </div>
                        </div>
                    </div>
                )
                })}
        
            </div>
        </>
     );
}
 
export default Favourite;