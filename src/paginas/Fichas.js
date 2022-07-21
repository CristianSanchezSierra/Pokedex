  import React, {useEffect, useState} from "react";
  import { Link, useParams } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
  import Boton from "../componentes/Botoncillo";
  import { faWeight } from "@fortawesome/free-solid-svg-icons";
  import { faRulerVertical } from "@fortawesome/free-solid-svg-icons";



  const Pokefichas = () => {
      let { id } = useParams();
      

      const[info, setInfo] = useState ([]);

      useEffect(() => {
          fetch(`https://us-central1-senpai-9b555.cloudfunctions.net/getPokemon?id=${id}`)
            .then((response) => response.json())
            .then((resultado) => {
              console.log('Informacion pokemon:', resultado)
              setInfo(resultado)
            })
          }, []);

          

          return (
            <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-300">
              <div className={`h-[99vh] w-[25vw] flex  flex-col rounded-lg drop-shadow-2xl ${info.types?.[0]?.type.name}`}>

                <div className="flex flex-row w-full mt-5 ml-5">
                <img className="absolute h-[30vh] opacity-25 mt-10 ml-44" src="https://www.seekpng.com/png/full/20-207845_pokeball-logo-png-download-pokeball-png.png"></img>
                  
                    <FontAwesomeIcon  className="mt-3 mr-2" icon={faArrowLeft} />
                  
                  <p className={`text-center text-2xl uppercase ${info.types?.[0]?.type.name}`}>{info.name}</p>
                  <p className="text-2xl ml-[250px]">{"#00" + id}</p>
                </div>
                
                <img className="absolute h-[40vh] w-[40wh] ml-14 mt-16" src={`${info.image}`}></img>

                <div className="bg-white h-[60vh] w-[50wh] flex flex-col bg-gray-300  mt-80 rounded-lg items-center">
                  <div className=" h-[7vh]  flex flex-row mt-10 ml-10">
                    <Boton 
                      text={info.types?.[0]?.type.name}
                      bgcolor={info.types?.[0]?.type.name}
                    />
                    <Boton 
                      text={info.types?.[1]?.type.name}
                      bgcolor={info.types?.[1]?.type.name}
                    />
                  </div>
                  <p className={`text-2xl rounded-full`}>About</p>
                  <div className="flex flex-row w-full h-[10vh]  items-center justify-center">

                    <div className="flex flex-col items-center w-1/3 border-black text-xl">
                      <div className="flex flex-row items-center">
                        <FontAwesomeIcon className="mr-5" icon={faWeight} />
                        <p>???kg</p>
                      </div>
                      <div className="text-slate-400">Weight</div>
                      
                    </div> 

                    <div className="flex flex-col items-center border-l-2 border-r-2 w-1/3  border-black text-xl">
                      <div className="flex flex-row items-center ">
                        <FontAwesomeIcon className="mr-5" icon={faRulerVertical} />
                        <p>??? mt</p>
                      </div>
                      <div className="text-slate-400">Lenght</div>
                      
                    </div>

                    <div className="flex flex-col items-center w-1/3 border-black text-xl">
                      <div className="flex flex-col items-center">
                        <p className="h-[2vh]">{info.moves?.[0]?.move.name}</p>
                        <p className="h-[2vh]">{info.moves?.[1]?.move.name}</p>
                      </div>
                      <div className="text-slate-400">Moves</div>
                      
                    </div>
                  </div>
                  
                  <div className="w-full h-[10vh] text-center text-xl">
                    <p> Es un pokemon muy coolEs un pokemon muy coolEs un pokemon muy coolEs un pokemon muy coolEs un p </p>

                    </div>
                    <p className="text-center text-2xl">Base Stats</p>
                    <div className="flex flex-row w-full h-[20vh]">
                      <div className="w-1/4 text-xl ml-5 flex flex-col">
                        <div className="flex flex-row-reverse mt-2">
                          <p>???</p>
                          <div className="border-l-2 border-slate-600 mr-5"></div>
                          <p className="mr-5">HP</p>
                        </div>
                        <div className="flex flex-row-reverse">
                          <p>???</p>
                          <div className="border-l-2  border-slate-600 mr-5"></div>
                          <p className="mr-5">ATK</p>
                        </div>
                        <div className="flex flex-row-reverse">
                          <p>???</p>
                          <div className="border-l-2 border-slate-600 mr-5"></div>
                          <p className="mr-5">DEF</p>
                        </div>
                        <div className="flex flex-row-reverse">
                          <div className="w-"></div>
                          <p>???</p>
                          <div className="border-l-2 border-slate-600 mr-5"></div>
                          <p className="mr-5">SATK</p>
                        </div>
                        <div className="flex flex-row-reverse">
                          <p>???</p>
                          <div className="border-l-2 border-slate-600 mr-5"></div>
                          <p className="mr-5">SDEF</p>
                        </div>
                        <div className="flex flex-row-reverse">
                          <p>???</p>
                          <div className="border-l-2 border-slate-600 mr-5"></div>
                          <p className="mr-5">SPD</p>
                        </div>
                        
                      </div>

                    </div>
                  </div>
                  
                </div>
              </div>
              
              )
            }
        
        export default Pokefichas;
        
        
        
        
// Llamo ciertas funciones y props mediante la import useParams, despues en la const donde la quiero llamar le pongo el let {  } = useParams