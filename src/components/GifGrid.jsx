import React, { useState, useEffect} from 'react'
import { GifCardItem } from './GifCardItem'
import { useFetchGifs } from '../hooks/useFetchGifs'


export  const GifGrid = ({category}) => {

    const { images, isLoading} = useFetchGifs(category)
    
  return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Loading...</h2>)
        }
        
        <div className='card-grid'>
           {
            <GifCardItem images={images}/>
           }
        </div>
    </>
  )
}
