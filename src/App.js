import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import './styles/app.css'

class App extends Component {
  //  var mylist = ["Ayy", "whats", "good"]
  //  const mapper = list.map(x : x + "\n")
  render() {
    let mylist = ['Ayy', 'whats', 'good']
    mylist = mylist.filter(x => x.length > 2)
    mylist = mylist.map((x, index) => (index % 2 === 1 ? x.toUpperCase() : x))

    const mapper = mylist.map(x => (
      <div>
        <ul>
          <li>{x}</li>
        </ul>
      </div>
    ))
    return (
      <div className="app">
        <h1>This is Nithin's porn site!</h1>
        <Instructions shouldDisplayImage={false} />
        {mapper}
        <Counter shouldInitCount={true} />
      </div>
    )
  }
}

export default App

//function hi(p1) {
//  return p1.name
//}

//const hi = (p1) => p1.name

// const names = ps.map(hi)

//const names = ps.map((p1) =>  p1.name)
