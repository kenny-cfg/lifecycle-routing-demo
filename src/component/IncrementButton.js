import { Component } from "react";

/*
Using what you’ve learnt from the previous
slides, add the appropriate lifecycle method/s to
meet the requirement below:

I want there to be a console output denoting that
the component successfully exists / came onto
the screen

I want a console output listing the newest value

everytime I click on my Increment Button
counter (where the state changes and updates
each time) - use a lifecycle method for this
*/

export default class IncrementButton extends Component {
  state = {
    count: 0
  }

  componentDidMount() {
    console.log('I exist')
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
        {this.state.count}
      </button>
    )
  }
} 