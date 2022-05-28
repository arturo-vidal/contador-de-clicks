import React from "react";
import '../estilos/Contador.css'

function Contador({numclicks}){
  return(
    <div className='contador'>
      {numclicks}
    </div>
  );
}

export default Contador;