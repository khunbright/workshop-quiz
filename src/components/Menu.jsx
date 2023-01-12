import React from 'react'
import { DataContext } from '../App'
import { useContext } from 'react'

const Menu = () => {
  const {setAppState} = useContext(DataContext)
  return (
    <div className='menu'>
      <h1>Are you ready??</h1>
      <button onClick={()=>setAppState('quiz')}>Start</button>
    </div>
    
  )
}

export default Menu