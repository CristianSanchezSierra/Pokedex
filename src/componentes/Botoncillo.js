    import React from "react";

    const Boton = (props) => {

        return(
            <>
            <div className={`h-[4vh] mr-7 rounded-full text-white p-1 items-center justify-center uppercase text-xl ${props.bgcolor}`}>
                <h1>{props.text}</h1>
            </div>
            </>
        )
    }

    export default Boton;