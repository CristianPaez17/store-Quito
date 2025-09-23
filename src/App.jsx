import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css'

function App(){
  
  console.log("Hola desde App.jsx")

  return (
    <>    
    <NavBar/>       
    <div className="app-background">
        <ItemListContainer greeting={"Tienda Del Deportivo Quito"} /> 
      </div> 
   </>
  )
}


export default App;