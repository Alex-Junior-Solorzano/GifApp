import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ categoria }) => {

  const { imagenes, isLoading } = useFetchGifs( categoria )
  

  return (
    <>
      <h3>{ categoria }</h3>
      {isLoading && (<h2>Cargando...</h2>)}
      <div className="card-grid">
        {
          imagenes.map((image) => (
            <GifItem 
              key={image.id} 
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
