import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import Footer from './components/Footer';
import About from './routes/About';
import Graphics from './routes/Graphics';
import Website from './routes/Website';
import Videos from './routes/Videos';
import Services from './routes/Services';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex flex-col bg-white-50">
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/home' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/services' element={<Services />} />
<Route path='/projects' element={<Projects />} />
<Route path='/contact' element={<Contact />} />

 <Route path="/projects/" element={<Projects />}>
    <Route path="website" element={<Website />} />
    <Route path="graphics" element={<Graphics />} />
    <Route path="videos" element={<Videos />} />
  </Route>

</Routes>
<Footer />

       </div>

    </>
  )
}

export default App
