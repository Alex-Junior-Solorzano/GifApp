import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = (categoria) => {
  const [imagenes, setImagenes] = useState([])
  const [isLoaging, setIsLoaging] = useState(true)

  const getImagenes = async() => {
    const newImagenes = await getGifs( categoria )
    setImagenes(newImagenes)
    setIsLoaging(false)
  }

  useEffect(() => {
    getImagenes()
  }, [])

  return {
    imagenes: imagenes,
    isLoading: isLoaging
  }
}

