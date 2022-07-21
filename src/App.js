import React from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Pokecenter from "./paginas/Pokecenter";

import Pokefichas from "./paginas/Fichas";
import Login from "./paginas/Login";


function App() {
  return(
    <BrowserRouter>
      <Routes>
      <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/pokecenter/:nombre'
          element={<Pokecenter/>}
        />      
        <Route
          path='/fichas/:id'
          element={<Pokefichas/>}
        /> 
       
      </Routes>

    </BrowserRouter>
  )

}




export default App;
