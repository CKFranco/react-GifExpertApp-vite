import React, { useState } from 'react'



export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('')

  // se recibe como parametro el evento del onchange
  const onInputChange = (event) => {

    //se llama a propiedad de value dentro del target del evento onchange
    setInputValue( event.target.value )
  }

  //funcion para prevenir el refresh del submit que tambien recibe evento como argumento
  const onSubmit = (event) => {
    event.preventDefault()

    if( inputValue.trim().length <= 1) return

    //setCategories(categories => [inputValue, ...categories])
    onNewCategory(inputValue.trim())
    setInputValue('')
    
  }

  return (

    //se manda la funcion Flecha onSubmit con sus paramtros de event
    <form onSubmit={ (event) => { onSubmit(event)} }>

      <input 
      type="text"
      placeholder='Buscar Gifs'
      value={inputValue}
      //funcion flecha oninputchange recibiendoparametros del evento
      onChange={ (event) => {onInputChange(event)} }
      />

    </form>
    
  )
}
