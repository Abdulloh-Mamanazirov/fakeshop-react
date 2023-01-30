import React from 'react'
import { Link } from 'react-router-dom'

const MoreHeader = () => {
  return (
    <div className='moreHeader'>
        <h1 className='logo'>Fake Shop</h1>
      <Link className='back' to='/'>Back to Products</Link>
    </div>
  )
}

export default MoreHeader
