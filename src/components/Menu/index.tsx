import { Code, UsersThree } from 'phosphor-react'
import React, { ReactElement } from 'react'

interface MenuProps {
  Title: string
  children?: ReactElement
}

export default function Menu({Title, children}: MenuProps) {
  return (
    <div className='flex flex-col gap-4 m-8'>
      <span className='tracking-[0.4em]'>
        {Title}
      </span>
      {children}
    </div>
    
  )
}
