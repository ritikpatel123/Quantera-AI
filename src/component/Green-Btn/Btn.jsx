import React from 'react'
import './Btn.scss'

export default function Btn({ buttonText }) {
  return (
    <div className='green-btn' >
        <button type="submit">{buttonText}</button>
    </div>
  )
}