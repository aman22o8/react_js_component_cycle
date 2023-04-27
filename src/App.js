import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShowClock: false}

  toggleClock = () => {
    this.setState(prevState => ({
      isShowClock: !prevState.isShowClock,
    }))
  }

  render() {
    const {isShowClock} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.toggleClock}
          type="button"
          className="toggle-button"
        >
          {isShowClock ? 'Hide  Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock date="15-04-2023" />}
      </div>
    )
  }
}

export default App
