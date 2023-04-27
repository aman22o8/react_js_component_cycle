import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
