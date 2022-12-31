import type { NextPage } from 'next'
import { Code, UsersThree } from 'phosphor-react'
import Header from '../components/Header'
import Input from '../components/Input'
import Menu from '../components/Menu'
import MyProjectMenu from '../components/MyProjectMenu'

const Home: NextPage = () => {
  return (
    <div className='bg-[#051D3B] max-w-[1200px] m-auto'>
      <Header />
      <Menu Title='MENU'>
        <>
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
        </>
      </Menu>
      <MyProjectMenu />
    </div>
  )
}

export default Home
