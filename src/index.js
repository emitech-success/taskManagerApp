import App from './App'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import TodoState from './helper/Context/Todo-context/TodoState'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
     <TodoState> 
      <BrowserRouter>
      <App />
      </BrowserRouter>
     </TodoState> 
  </React.StrictMode>
)


