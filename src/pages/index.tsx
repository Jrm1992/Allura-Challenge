import type { NextPage } from 'next'
import { Code, UsersThree } from 'phosphor-react'
import { useState } from 'react'
import CodeEditor from '../components/CodeEditor'
import Header from '../components/Header'
import Menu from '../components/Menu'
import MyProjectMenu from '../components/MyProjectMenu'

const Home: NextPage = () => {
  const [color, setColor] = useState('#0058ff')
  const [lang, setLang] = useState('javascript')
  
  return (
    <div className='bg-[#051D3B] max-w-[1440px] m-auto'>
      <Header />
      <div className='flex flex-col lg:flex-row '>
        <Menu Title='MENU' className='mx-8'>
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
        <CodeEditor color={color} lang={lang}/>
        <MyProjectMenu setColor={setColor} setLang={setLang}/>
      </div>
    </div>
  )
}

export default Home
