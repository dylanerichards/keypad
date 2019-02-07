import React, { Component } from "react"
import axios from "axios"

class Keypad extends Component {
  constructor(props) {
    super(props)

    this.state = {
      combinations: [],
      number: ""
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

      this.setState((prevState, currentProps) => {
        return { ...prevState, combinations }
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Keypad</h1>
        <h2>{this.state.number}</h2>

        <div className="row">
          <div className="input-field">
            <label htmlFor="keypad-input">Number: </label>
            <input type="text" onChange={(e) => this.handleChange(e)} maxLength="7"/>
          </div>
        </div>

        <div>
          <ul className="collection">
            {this.state.combinations.map(combination => <li key={Math.random()} className="collection-item">{combination}</li>)}
          </ul>
        </div>

      </React.Fragment>
    )
  }
}

export default Keypad
