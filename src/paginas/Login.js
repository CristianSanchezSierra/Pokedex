    import React, { useState } from "react";
    import { Link } from "react-router-dom";

    const Login = () => {

        
        const[nombre, setNombre] = useState('')
        const handleNombre = (e) => {
                console.log('e:', e.target.value)
                setNombre(e.target.value)
                
                // Para que el input sepa en todo momento que le estoy colocando en forma de array con el useState
            }

        const Limite =()=>{
            if(nombre.length === 0){
                alert("Debes escribir tu nombre");
                return false;
            }
            return true;
        }
        
        

        return(
            <div className="bg-orange-500 h-screen w-full flex flex-col items-center">
                <div className=" h-[25vh] w-1/4 -full flex items-center justify-center">
                    <img src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"></img>
                </div>

                <div className="flex flex-row mr-60">
                    <img className="h-[40vh] w-42" src="https://images.wikidexcdn.net/mwuploads/wikidex/7/75/latest/20210819022357/Profesor_Serbal_DBPR.png"></img>
                    <img className="h-[14vh] w-36 mt-60" src="https://media2.giphy.com/media/GltC4HZLjJLvq/giphy.gif?cid=ecf05e472zj75ugvbm3hovt52lv0veljfzr1d3bhk68czprw&rid=giphy.gif&ct=s"></img>
                    <div className="text-white text-2xl w-96 flex flex-col items-center">
                    <p className="text-center">¡Hola! Encantado de conocerte, soy el profesor Serbal. Estoy reclutando gente interesada en saber mas de los Pokemon como tu. Para empezar a usar tu nueva Pokedex, por favor dime tu nombre.</p>

                    <input className="rounded-lg mt-10 text-center text-black w-96" type="text" placeholder="¡Escribe tu nombre, entrenador!" onChange={handleNombre} value={nombre}></input>
                    <Link className="mt-5"
                    to={`/pokecenter/${nombre}`}

                    >
                        <span onClick={Limite} className="h-[20vh] bg-red-500 rounded-lg text-center p-1">¡Investigar!</span>

                    </Link>

                    </div>
                    
                </div>
                
            

            </div>
        )
    }

    export default Login;