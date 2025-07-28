import React from 'react'
import './Usercard.css'

const Usercard = (props) => {
  return (
    <div className='Usercontainer' style={props.style}>
        <p id='title'>{props.name}</p>
        <div id='Photo' className='circle'></div>
        <p id='user-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quo, non similique hic tempore est tempora nesciunt repellat excepturi facilis deleniti ad aliquid officiis pariatur aut nemo natus quae. Fugiat?</p>
    </div>
  )
}

export default Usercard;