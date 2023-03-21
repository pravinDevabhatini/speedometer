// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onBrake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">speedometer</h1>
        <div className="content-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="speedometer"
            alt="speedometer"
          />
          <h1 className="heading">
            speed is <span>{speed}</span>mph
          </h1>
          <p className="paragraph">min limit 0mph ,max limit 200mph</p>
          <div>
            <button
              type="button"
              className="accelerate-btn"
              onClick={this.onAccelerate}
            >
              Accelerate
            </button>
            <button type="button" className="brake-btn" onClick={this.onBrake}>
              apply brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer