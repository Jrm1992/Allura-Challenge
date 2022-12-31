import React from 'react'
import Input from '../Input'
import Menu from '../Menu'

export default function MyProjectMenu() {
  return (
    <Menu Title='SEU PROJETO'>
      <div className='flex flex-col gap-4 w-[272px]'>
        <Input placeholder='Nome do seu projeto' />
        <Input placeholder='Drescricao do seu Projeto'/>
      </div>
    </Menu>
  )
}
