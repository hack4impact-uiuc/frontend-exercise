import React, { Component } from 'react'
import { Instructions } from './components'
import './styles/app.css'

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>This is Nithin's porn site!</h1>
        <Instructions shouldDisplayImage />
      </div>
    )
  }
}

export default App
