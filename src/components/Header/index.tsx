import Image from 'next/image'
import React from 'react'

import Logo from '../../../public/Logo.svg'
import Author from '../../../public/author.png'
import { List, MagnifyingGlass } from 'phosphor-react'

export default function Header() {
  return (
    <div className='flex justify-between p-8 items-center'>
      <div>
        <Logo />
      </div>
      <div>
        <input type='text' placeholder='Buscar por algo' className='px-4 rounded bg-[#ffffff16] text-slate-50 h-12 hidden lg:flex lg:w-[752px] outline-none' />
        <MagnifyingGlass size={24} color="#fafafa" weight="bold" className='flex lg:hidden ml-20'  />
      </div>
      <div className='text-slate-50'>
        <Image src={Author} alt='Avatar Author' className='hidden lg:flex' />
        <List size={24} color="#fafafa" weight="bold" className='flex lg:hidden' />
      </div>
    </div>
  )
}
