import swal from "@sweetalert/with-react";
import { useNavigate} from "react-router-dom";


const Search = () => {

    const navigate = useNavigate();

    const handlerSubmit = (e)=>{
        e.preventDefault();

        const keyword = e.currentTarget.keyword.value.trim();

        console.log(keyword);

        if(keyword.length === 0){
            swal({title: "Tienes que escribir una palabra clave!"});
        }else if(keyword.length < 4){
            swal({title: "Tienes que escribir al menos 4 caracteres!"});
        }else{
            e.currentTarget.keyword.value = '';
            navigate(`/results?keyword=${keyword}`);
        }
    }

    return ( 
        <>
            <form className='d-flex align-items-center' onSubmit={handlerSubmit}>
                <div className='mx-1'>
                    <input
                        className="form-control"
                        type="text"
                        name="keyword"
                        placeholder="Escribe una palabra clave..."
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                Buscar
                </button>
            </form>
        </>
     );
}
 
export default Search;