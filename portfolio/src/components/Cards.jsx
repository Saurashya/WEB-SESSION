import React from 'react'

const Cards = ({src}) => {
  return (
    <div className='h-[30vh] custom-bg flex items-center justify-center rounded-sm relative'>
        <img src={src} className='h-[80%] w-[80%]'/>
    </div>
  )
}

export default Cards