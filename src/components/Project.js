import React from 'react'

function Project({image, name}) {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})`}} className='backgroundImage'/>
      <h1>{name}</h1>
    </div>
  )
}

export default Project