import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifApp = () => {

  const [categorias, setCategorias] = useState(['One Punch'])

  const onAddCategoria = ( newCategory ) => {

    if( categorias.includes( newCategory ) ) return 
    setCategorias ([newCategory, ...categorias ])
  }
  
  return (
    <>
      <h1>GifApp</h1>

      <AddCategory onNewCategoria = { event => onAddCategoria(event) } />

      <ol>
        {
          categorias.map(cat => {
            return (
              <GifGrid 
                key={cat} 
                categoria = {cat}
              />
            )
          })
        }
      </ol>
    </>
  )
}

