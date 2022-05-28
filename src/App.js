import './App.css';
import Boton from './componentes/boton';
import fcclogo from './imagenes/FCC-logo.png'
import Contador from './componentes/contador';
import { useState } from 'react'

function App() {

  const [numclicks, setNumClicks]= useState(0);

  const manejarClick =()=>{
    setNumClicks(numclicks + 1);
  };

  const reiniciarContador =()=>{
    setNumClicks(0);
  };
  
  return (
    <div className="App">
     <div className='fcc-logo-contenedor'>
       <img className='fcc-logo' src={fcclogo} alt='logo de freecodecamp' />
     </div>
     <div className='contenedor-contador'>
       <Contador numclicks={numclicks} />
       <Boton texto='Click' esBotonDeClick={true} manejarClick={manejarClick} />
       <Boton texto='Reiniciar' esBotonDeClick={false} manejarClick={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
