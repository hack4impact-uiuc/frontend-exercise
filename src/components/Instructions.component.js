import React, { Component } from 'react'
// TODO: uncomment this for Part 1
// import PropTypes from 'prop-types'
import './../styles/instructions.css'

class Instructions extends Component {
  render() {
    return (
      <div className="instructions">
        Follow the instructions on the README to get started!
        {this.props.shouldDisplayImage && (
          <img
            className="instructions__logo"
            src="https://uiuc.hack4impact.org/img/colored-logo.png"
            alt="h4i logo"
          />
        )}
        <ul>
          {this.props.items
            .filter(item => item.length < 3)
            .map(function(item, index) {
              if (index % 2 === 0) {
                item.toUpperCase()
              }
              return item
            })
            .map(item => <li>{item}</li>)}
        </ul>
      </div>
    )
  }
}

export default Instructions
