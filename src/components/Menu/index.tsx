import { Code, UsersThree } from 'phosphor-react'
import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col gap-4 leading-5 m-8'>
      MENU
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-2xl bg-[#5081FB] text-sm font-extrabold justify-center items-center flex'>
        <Code size={24} color="#fafafa" weight="bold" />
        </div>
        Editor de codigo
      </div>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 rounded-2xl bg-[#5081FB16] text-sm font-extrabold justify-center items-center flex'>
        <UsersThree size={24} color="#fafafa" weight="bold" />
        </div>
        Comunidade
      </div>
    </div>
    
  )
}
