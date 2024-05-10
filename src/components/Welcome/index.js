// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {onClick: false}

  onSubscribe = () => {
    this.setState(prevState => ({onClick: !prevState.onClick}))
  }

  onButtonClick = () => {
    const {onClick} = this.state
    return onClick ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.onButtonClick()
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">Welcome</h1>
          <p className="para">Thank you! Happy Learning</p>
          <button className="button" type="button" onClick={this.onSubscribe}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Welcome
