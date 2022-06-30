import { useEffect, useState } from "react"
import { getGifsData } from "../helpers/getGifsData"


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {

        const newImages = await getGifsData(category)
        setImages(newImages)
        setIsLoading(false)

    }
    //meter la funcion getGifs dentro del use efect y 
    //los corchetes final son para que la funcion solo se ejecute una vez al inicio 
    useEffect(() => {
        getImages()
    },[])


  return {
    images,
    isLoading
  }
}
