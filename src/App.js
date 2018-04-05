import React, { Component } from 'react'
import { Instructions, Counter } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { initialCount: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ initialCount: event.target.value })
  }

  handleSubmit(event) {
    alert('The submitted initial count is: ' + this.state.initialCount)
    event.preventDefault()
  }
  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Count:
            <input
              type="text"
              initialCount={this.state.initialCount}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Instructions
          shouldDisplayImage={false}
          items={['hi', 'lol', 'cat', 'dj', 'tj']}
        />
        <Counter count={this.state.initialCount} />
      </div>
    )
  }
}

export default App
