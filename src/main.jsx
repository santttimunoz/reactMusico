import React from 'react'
import ReactDOM from 'react-dom/client'
import {Home} from './Home/Home.jsx'
//importar bootsrap(stodo se encuentra en la carpeta dist que no se ve)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home></Home>
  </React.StrictMode>,
)