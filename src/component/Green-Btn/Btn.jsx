import React from 'react'
import './Btn.scss'

export default function Btn({ buttonText,onClick }) {
  return (
    <div className='green-btn' >
        <button onClick={onClick}type="submit">{buttonText}</button>
    </div>
  )
}