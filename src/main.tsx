import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header.tsx'
import Footer from './Components/Footer.tsx'
import About from './Components/About.tsx'
import RecipePage from './Components/RecipePage.tsx'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Recipe/:id" element={<RecipePage/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>
    
  
)
