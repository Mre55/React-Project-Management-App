import React from 'react'

const NavBar = () => {
  return (
    <div className='pt-20 pl-12 absolute top-10 left-0 bg-zinc-900 rounded-tr-3xl min-h-screen w-1/4 text-gray-300'>
      <h2 className='font-semibold text-2xl tracking-wide'>YOUR PROJECTS</h2>
      <button className='mt-16 h-12 w-40 rounded-lg text-lg font-normal bg-amber-100/[.1] text-stone-300/75'>+ Add Project</button>
    </div>
  )
}

export default NavBar