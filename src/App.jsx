import { useState } from 'react'
import 'ol/ol.css';
import { useNavigate } from 'react-router-dom';

import Router from './layout/Router'

function App() {
  window.goto=useNavigate();
  return (
    <>
     <Router />
    </>
  )
}

export default App
