import { useState } from 'react'
import './App.css'
import SelectFilter from './components/SelectFilter/SelectFilter'
import TaksForm from './components/TaksForm/TaksForm'
import Taks from './components/Taks/Taks'


function App() {


  return (
      <div className='main_app'>
      <TaksForm/>
      <Taks/>
      <SelectFilter/>
      </div>
      
  )
}

export default App
