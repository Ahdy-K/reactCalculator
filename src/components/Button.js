import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="Button"
        data-size={this.props.size}
        data-value= {this.props.value}
      >
        {this.props.label}
      </button>
    )
  }
}
export default Button