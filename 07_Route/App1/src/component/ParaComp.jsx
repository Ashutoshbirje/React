import React from 'react'
import { useParams } from 'react-router-dom'

function ParaComp() {
    const {id} =useParams();

  return (
    <div>ParaComp: {id}</div>
  )
}

export default ParaComp