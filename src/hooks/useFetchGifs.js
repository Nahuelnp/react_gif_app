import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{

    const [state, setState] = useState({
        data:[],
        loading:true
    });

    // use effect se ejecuta cada ves que cambia category que es su dependencia, entonces vuelve a renderizar el componente
    useEffect( ()=>{
        getGifs(category).then(imgs=>{
    
            setState({
                data:imgs,
                loading:false
            })
 
        })

    },[category]) // [category] es la dependencia del hook


    return state; // {data:[], loading:true}
}