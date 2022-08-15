import { Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList/MovieList";
import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Movie from "./components/Movie/Movie";
import Results from "./components/Results/Results";

function App() {
  return (
    <>
      <Header />

      <div className='container mt-3'>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/movieList" element={<MovieList />} />
          <Route path="/movie" element={<Movie/>} />
          <Route path="/results" element={<Results/>} />
        </Routes>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
