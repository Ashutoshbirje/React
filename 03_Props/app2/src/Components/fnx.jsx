import React from 'react'

function fun(props) {
  return (
    <div>
        {props.children}
        <button onClick={props.incermentCount}>{props.text}</button>
    </div>
  )
}

export default fun;