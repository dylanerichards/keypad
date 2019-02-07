import React, { Component } from "react"
import axios from "axios"

class Keypad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      combinations: []
    }
  }
    handleChange = (e) => {
        axios.get('/combinations', {
          params: {
            number: e.target.value
          }
        })
        .then((response) => {
          const combinations = response.data
          this.setState({ combinations })
        })
    }

  render() {
    return (
      <React.Fragment>
        <h1>Keypad</h1>

        <label htmlFor="keypad-input">Number: </label>
        <input type="text" onChange={(e) => this.handleChange(e)}/>

        {this.state.combinations.join(", ")}
      </React.Fragment>
    )
  }
}

export default Keypad
