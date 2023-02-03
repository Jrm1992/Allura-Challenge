import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Menu from '../Menu'

export default function MyProjectMenu({setColor, setLang}: any) {
  
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    setLang(event.target.value);
  };
  
  return (
    <form className='flex flex-col gap-4 mx-8'>
      <Menu Title='SEU PROJETO'>
        <div className='flex flex-col gap-4'>
          <Input placeholder='Nome do seu projeto' />
          <Input placeholder='Drescricao do seu Projeto' className='h-20'/>
        </div>
      </Menu>
      <Menu Title='PERSONALIZACAO'>
        <div className='flex flex-col gap-4'>
          <select className='bg-white/[0.16] hover:bg-white/[0.24] h-14 gap-2 p-4 rounded-lg outline-none' onChange={(e) => handleChange(e)}>
            <option className='bg-[#051d3b]' value="javascript">Javascript</option>
            <option className='bg-[#051d3b]' value="xml">HTML</option>
            <option className='bg-[#051d3b]' value="css">CSS</option>
          </select>
          <Input type='color' defaultValue="#0058ff" className='py-1 px-2 outline-none' onChange={(e) => setColor(e.target.value)}/>
        </div>
      </Menu>
      <Button Title='Salvar projeto' className=''/>
    </form>
  )
}
