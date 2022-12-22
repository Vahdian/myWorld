import React from 'react'
import "./button.scss"

export default function Button({title}) {
  return (
    <button className='button'>
    <div>{title}</div>
    </button>
  )
}