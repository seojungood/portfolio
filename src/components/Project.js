import React from 'react'
import { useNavigate } from 'react-router-dom'

function Project({ id, name, image}) {
  const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={() => {navigate(`/project/${id}`)} }>
      <div style={{ backgroundImage: `url(${image})`}} className='backgroundImage'/>
      <h1>{name}</h1>
    </div>
  )
}

export default Project