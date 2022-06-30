import React from 'react'

export const GifCardItem = ({images}) => {
  return (
        images.map((image) => (
        
        <div key={image.id} className='card' >
            <img src={image.url} alt={image.title} />
            <p>{image.title}</p>
        </div>))
  )
}
