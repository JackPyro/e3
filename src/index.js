import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from 'styled-components'
import App from './pages/App'
import 'normalize.css/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'

injectTapEventPlugin()

const appElement = document.createElement('div')
appElement.setAttribute('id', 'app')
document.body.appendChild(appElement)

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('app')
)
injectGlobal`
  body {
    background-image: url('https://i.imgur.com/CcUS2ij.png') !important;
  }
`