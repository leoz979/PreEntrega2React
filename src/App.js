import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemListContainerEstrellas from './components/ItemListContainerEstrellas';
import ItemListContainerEstreno from './components/ItemListContainerEstreno';
import Itemid from './components/Itemid';


import Error     from './components/Error';

function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/genero/:id"} element={<ItemListContainer/>} />
          <Route path={"/calificacion/:id"} element={<ItemListContainerEstrellas/>} />
          <Route path={"/estreno/:id"} element={<ItemListContainerEstreno/>} />
          <Route path={"/idPersonaje/:id"} element={<Itemid/>} />
          <Route path='*' exact element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
