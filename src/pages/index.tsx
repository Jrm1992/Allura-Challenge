import type { NextPage } from 'next'
import Header from '../components/Header'
import Menu from '../components/Menu'

const Home: NextPage = () => {
  return (
    <div className='bg-[#051D3B] max-w-[1200px] m-auto'>
      <Header />
      <Menu />
    </div>
  )
}

export default Home
