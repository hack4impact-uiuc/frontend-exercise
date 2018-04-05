import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = { count: this.props.initialCount }
  }
  increment = () => {
    this.setState(state => ({
      count: state.count + 1
    }))
  }
  decrement = () => {
    this.setState(state => ({
      count: state.count - 1
    }))
  }
  render() {
    return (
      <div>
        Count: {this.state.count}
        <div>
          {' '}
          <button onClick={this.increment}>increment</button>{' '}
        </div>
        <div>
          {' '}
          <button onClick={this.decrement}>decrement</button>{' '}
        </div>
      </div>
    )
  }
}

export default Counter
