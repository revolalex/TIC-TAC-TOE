import React from 'react'

class Square extends React.Component {
    render() {
      return (
        <button
          className="square"
          onClick={this.props.onClick}
        >
          <p className={this.props.value === 'X' ? 'neon-small-text' : 'neon-small-text-o'} style={{fontSize: "1em"}}>{this.props.value}</p>
        </button>
      );
    }
  }
  export default Square