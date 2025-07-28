import React from 'react'
import './child.css'
 
const child = (props) => {
  return (
    <div className='Usercontainer' style={props.style}>
        <p id='title'>{props.name}</p>
        <div id='Photo' className='circle'></div>
        <p id='user-desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quo, non similique hic tempore est tempora nesciunt repellat excepturi facilis deleniti ad aliquid officiis pariatur aut nemo natus quae. Fugiat?</p>
        {/* acsess the children of this component */}
        {props.children}
    </div>
  )
}

// const Usercard = ({children}) => {
//   return (
//     <div className='Usercontainer' style={props.style}>
//         {/* acsess the children of this component */}
//         {children}
//     </div>
//   )
// }

export default child;