import { Component } from "react";

export default class IncrementButton extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    console.log('I exist')
  }
  
  componentDidUpdate() {
    console.log(`Current count: ${this.state.count}`)
  }

  render() {
    const onClick = () => {
      this.setState({
        ...this.state,
        count: this.state.count + 1
      })
    }
    return (
      <button onClick={onClick}>
        CLASSY: {this.state.count}
      </button>
    )
  }
} 