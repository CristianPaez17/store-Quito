import './App.css';
import ItemCount from './components/itemCount/itemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router';

function App(){   
  return (
    <BrowserRouter>       
        <NavBar/> 
        <Routes>
           <Route 
            path="/" 
            element={  <ItemListContainer greeting={"SDQuito Store"}/> }
           />
           <Route
            path="/detail/:idParam"
            element={ <ItemDetailContainer />}
           />
           <Route 
              path="/category/:catParam"
              element={ <ItemListContainer greeting="Categoría de Productos" />}
            />
            <Route
              path="*"
              element={ <div><h2>No encontramos resultados</h2></div>}
           />
        </Routes>
        
    </BrowserRouter>
  )
}


export default App;