import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'

import Nav from './components/Nav'

import HomePage from './pages/HomePage'
import About from './pages/About'
import Stock from './pages/Stock'
import Dashboard from './pages/Dashboard'


function App() {
  let apiKey = '8gPQwP9FXQiWtclAbgoZ6f4WyXLVbO2R'

  let url = `https://financialmodelingprep.com/api/v3/search?query=AA&apikey=${apiKey}`

  let [ stock, setStock] = useState({})

  //This function will fetch stock market data from the API and save it to stock
  async function getStock (){
      try{
          let response = await fetch(url)
          let data = await response.json()

          setStock(data)
      } catch(error){
          console.log(error)
      }
  
  }

  // Allows us to call the stock market data once
  useEffect(()=>{
      getStock()
  },[])

  return (
    <>
    < Nav />
    <Routes>
    <Route path = '/' element ={<HomePage />} />
    <Route path = '/About' element ={< About />} />
    <Route path = '/Dashboard' element ={< Dashboard stock={stock} />} />
    <Route path = '/Stock/:symbol' element ={< Stock name ={name}/>} />
    </Routes>
    </>
  )
}

export default App
