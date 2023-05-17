import React from 'react'
import "./character-container.css"
function Cardlayout({children}: {children: React.ReactNode}) {
  return (
    <div className='character-layout'>{children}</div>
  )
}

export default Cardlayout