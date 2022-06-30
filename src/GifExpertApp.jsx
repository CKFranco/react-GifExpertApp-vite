import React, { useState } from 'react'
import { AddCategory, GifGrid} from './components'


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gorillaz'])

    const onAddCategory = (newCategory) => {
      
      if (categories.includes(newCategory)) return
      console.log(newCategory)

      setCategories ([ newCategory, ...categories])
    
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpertApp</h1>

    {/* input */}
    {/* Se agrega propiedad setCategories al elemento padre, llaves para llamar a la funcion*/}
    <AddCategory 
        //setCategories={setCategories}
        
         //Sintaxis tradicional y resumida
        //onNewCategory={(commigString) => {onAddCategory(commigString)}}
        onNewCategory={onAddCategory}
    />


    {/* Listado gif */}
    {/* <button onClick={onAddCategory}>Add Category</button> */}
    {/* Renderizado(map) de categorias, se genera un barrido por cada categoria */}
    {categories.map(category => 
        //se agrega prop Category a elmento padre
       <GifGrid 
          key={category}
          category={category}
       />
     )}
    
    </>
  )
}
