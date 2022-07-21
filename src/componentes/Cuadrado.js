  import React from "react";


  const Cuadrado = (props) => {
      return(
        <div className={`flex flex-col h-30 w-32  bg-white border-black rounded-lg m-2 border shadow-xl ${props.type}`}>
            
            <div className="bg-white rounded-t-lg">
              <p className="h-2 mr-2  flex flex-row-reverse text-xs">{"#00" + props.id}</p>
              <img className="h-[12VH]" src={props.image}></img>
            </div>
            
            <div className={`h-[3vh] rounded-lg text-center text-white ${props.type}`}>{props.name}</div>
        </div>
      )
  }

  export default Cuadrado;


  // El color se detecta por la conexion que tienen por el App.jsS