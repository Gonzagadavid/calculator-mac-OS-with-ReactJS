import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Calculator from './main/Calculator'
import reportWebVitals from './reportWebVitals'

const root = document.getElementById('root')
ReactDOM.render(
  <div>
    <h1>Calculadora</h1>
    <Calculator />
  </div>,
  root
)
reportWebVitals()
