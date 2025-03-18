import React from 'react'
import Options from '../components/Options'
import Cards from '../components/Cards'
import card1 from '/card1.png'
import card2 from '/card2.png'
import card3 from '/card3.png'

const Works = () => {
  return (
    <div className='h-[80vh] bg-[#222831] flex items-center justify-center gap-6 flex-col'>
        <div className="heading text-white">
            <h1 className='text-xl sm:text-3xl md:text-5xl '>My recent <span className='text-cyan-400'>works</span></h1>
        </div>
        <div className="options flex gap-4">
            <Options name={"All"}/>
            <Options name={"UI"}/>
            <Options name={"UX"}/>
            <Options name={"Web Design"}/>
        </div>
        <div className="cards flex justify-around h-[60%] w-[100%] items-center">
            <Cards src={card1}/>
            <Cards src={card2}/>
            <Cards src={card3}/>
        </div>
    </div>
  )
}

export default Works