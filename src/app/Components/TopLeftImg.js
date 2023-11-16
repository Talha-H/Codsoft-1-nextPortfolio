import React from 'react'
import Image from 'next/image'

const TopLeftImage = () => {
  return (
    <div className='absolute top-0 left-0 w-[150px] lg:w-[300px] -z-20 opacity-50'>
      <Image src="/top-left-img.png" width={400} height={400} alt='top-left'/>
    </div>
  )
}

export default TopLeftImage