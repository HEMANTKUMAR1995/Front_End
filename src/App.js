import { useEffect, useState } from "react";
import "./App.css";
import apiConfig from "./api/apiCalls/ApiConfigurations";
import Layout from "./Component/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./Component/home/Home";
import Navbar from "./Component/Headers/Navbar";

function App() {
  const [movie, setMovie] = useState();
  console.log("movieSate", movie);

  const fetchmovie = async () => {
    try {
      const response = await apiConfig.get("/api/v1/movies");
      console.log("Response", response.data);
      setMovie(response.data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    fetchmovie();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home movies={movie} />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
