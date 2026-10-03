import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();
  const [isIntroVisible, setIsIntroVisible] = useState(
    () => sessionStorage.getItem('portfolioIntroSeen') !== 'true',
  );
  const [isIntroLeaving, setIsIntroLeaving] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    if (!isIntroVisible) return undefined;

    const timer = window.setTimeout(() => setIsIntroLeaving(true), 1900);
    return () => window.clearTimeout(timer);
  }, [isIntroVisible]);

  const finishIntro = (event) => {
    if (event.target !== event.currentTarget || !isIntroLeaving) return;

    sessionStorage.setItem('portfolioIntroSeen', 'true');
    setIsIntroVisible(false);
  };

  return (
    <>
      {isIntroVisible && (
        <div
          className={`site-intro${isIntroLeaving ? ' site-intro--leaving' : ''}`}
          role="status"
          aria-live="polite"
          onAnimationEnd={finishIntro}
        >
          <div className="site-intro__content">
            <p className="site-intro__name">PATRICK CUETO</p>
            <p className="site-intro__label">PORTFOLIO LOADING</p>
            <div className="site-intro__progress" aria-hidden="true">
              <span />
            </div>
            <button
              className="site-intro__skip"
              type="button"
              onClick={() => setIsIntroLeaving(true)}
            >
              Skip intro
            </button>
          </div>
        </div>
      )}
      <div className="min-h-screen flex flex-col overflow-x-clip bg-white text-slate-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-stone-100">
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
