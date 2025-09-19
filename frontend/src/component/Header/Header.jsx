import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-[390px] h-[72px] bg-[#FF5200]'>
        <p>Salt And Peper</p>
        <p>Digital Menu</p>
        <Link to="/cart">Cart</Link>
    </div>
  )
}
