import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal({
        icon: "error",
        title: "Credenciales inválidas!",
      });
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org", {
        email,
        password,
      })
      .then((res) => {
        swal({
          icon: "success",
          title: "Ingresaste correctamente!",
        });
        const tokenRecibido = res.data.token;
        sessionStorage.setItem('token', tokenRecibido);
        navigate('/movieList');
      });

    
  };

  const token = sessionStorage.getItem("token");

  return (
    <div className="col-6 offset-3">
      {token && <Navigate to='/movieList'/>}

      <h2 className="nav justify-content-center mb-3">Login</h2>
      <form onSubmit={handleSubmit} className='container '>
        <div className='mb-3'>
          <label className="form-label" htmlFor="correo electronico">
            Email address
          </label>
          <input
            className="form-control d-block"
            type="email"
            id="correo electronico"
            name="email"
            placeholder="Correo electronico"
            required
            pattern='/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor="password" className="form-label ">Password</label>
          <input
            className="form-control d-block"
            type="password"
            id='password'
            name="password"
            placeholder="Contraseña"
            required
          />
        </div>
        
        <button className="btn btn-primary" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Login;
