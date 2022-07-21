  import React, { useEffect } from "react";
  import Cuadrado from "../componentes/Cuadrado";
  import { Link } from "react-router-dom";
  import { useParams } from "react-router-dom";
  import { useState } from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faArrowUp19, faArrowUpAZ } from "@fortawesome/free-solid-svg-icons";
  import { icon } from "@fortawesome/fontawesome-svg-core";







const Pokecenter = () => {
let { nombre } = useParams();


const[searchTerm, setSearchTerm] = useState ("");
const[pokemones, setPokemones] = useState ([]);

useEffect(() => {
    fetch('https://us-central1-senpai-9b555.cloudfunctions.net/getFullList')
      .then((response) => response.json())
      .then((resultado) => {
        console.log('resultado:', resultado)
        setPokemones(resultado)
      })
    }, []);

    const handleString = () => {
      const strAscending = [...pokemones].sort((a,b) => {
        if(a.name < b.name){
          return -1
        }else{
          return 1
        }
      }
         
      );
      setPokemones(strAscending)
    }
    
    const handleNumeric = () => {
      const numAscending = [...pokemones].sort((a,b) =>
        a.id - b.id
      );
      setPokemones(numAscending)
    }

    const [sortByNumber, setSortByNumber] = useState(true)


    const handleChange = () => {
    if(sortByNumber) {
      handleNumeric()
    } else {
      handleString()
    }
      setSortByNumber(!sortByNumber)
    }




      const [icono, setIcono] = useState(faArrowUpAZ)
      const Cambiar = () => {
        if (icono === (faArrowUpAZ)){
          setIcono(faArrowUp19)
        }else{
          setIcono(faArrowUpAZ)
        }
      }

        
      return (
        
        <div className="flex flex-col h-[100vh] w-full bg-orange-500 md: items-center">

            <div className="flex flex-row h-14 w-14 ml-5 md: justify-center md: mr-6">
              <img src="https://cdn3.iconfinder.com/data/icons/movies-3/32/pokemon-movie-cinema-ball-512.png" className="h-8 w-8 mt-3"></img>
              <div className="flex justify-center text-2xl mt-3">POKÉDEX</div>
            </div>

            <div className="flex md:w-1/4">
              <input placeholder="Buscar"  onChange={(e) => {setSearchTerm(e.target.value)}} className="w-full border border-slate-50 text-center ml-5 mr-5 rounded-lg md:"  type='text'></input>
            </div>
            <p className="w-96 text-center text-white text-xl">{nombre} esta es tu Pokedex, ahora puedes investigar y buscar tus Pokemon favoritos! </p>
            <button className="ml-[350px] h-5" onClick={handleChange}>
            <FontAwesomeIcon className="h-[3vh]" icon={icono} onClick={Cambiar} />
            </button>

            <div className="flex flex-wrap h-3/5 w-4/4 bg-white mt-5 overflow-auto rounded-lg  md: w-1/4 md: h-[80vh]">

              
            <div className="flex flex-wrap justify-center">
                {pokemones.filter((val)=> {
                  if(searchTerm === ""){
                    return val
                  }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                  }
                }).map((pokemon, index) => 

                <Link
                to={`/fichas/${pokemon.id}`} 
                >
                  <Cuadrado
                  id={pokemon.id}
                  image={pokemon.image}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  key={index}
                />

                </Link>
              )}
              </div>
            </div>

          </div>
      )
  }

export default Pokecenter; 






