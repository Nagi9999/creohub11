import Image from 'next/image'
import Index from './home/home'
import How from './components/how'
import Catego from './components/categories'
import AddJob from './components/added'

export default function Home() {
  return (
    <main className="  flex flex-col justify-center  ">
      
      <How/>
      <Catego/>
     <AddJob/>
    </main>
  )
}
