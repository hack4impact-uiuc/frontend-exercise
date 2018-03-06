import React, { Component } from 'react'

class Counter extends Component {
  state = { count: 0 }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleSubmit = event => {
    event.preventDefault()
    let input = event.target[0].value
    this.setState({ count: parseInt(input, 10) })
  }

  render() {
    const buttonStyles = {
      border: '1px solid #ccc',
      background: '#fff',
      fontSize: '2em',
      padding: 15,
      margin: 5,
      width: 200
    }
    if (this.props.shouldInitCount)
      return (
        <div className="counter">
          <form onSubmit={this.handleSubmit}>
            <label>
              Initialize the Count:
              <input type="text" />
            </label>
            <button type="submit">Submit</button>
          </form>

          <label>{this.state.count}</label>
          <button onClick={this.handleDecrease} style={buttonStyles} />
          <button onClick={this.handleIncrease} style={buttonStyles} />
        </div>
      )
    else
      return (
        <div className="counter">
          <label>{this.state.count}</label>
          <button onClick={this.handleDecrease} style={buttonStyles} />
          <button onClick={this.handleIncrease} style={buttonStyles} />
        </div>
      )
  }
}
export default Counter
