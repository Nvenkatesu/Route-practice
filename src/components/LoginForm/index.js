import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: '', isTrue: false}

  getResult = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitDetails = async event => {
    event.preventDefault()

    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, option)

    if (response.ok === true) {
      this.getResult()
    } else {
      const msg = 'Username is not found'
      this.setState({username: '', password: '', error: msg, isTrue: true})
    }
  }

  getUsername = event => {
    const user = event.target.value
    this.setState({username: user})
  }

  getPassword = event => {
    const pass = event.target.value
    this.setState({password: pass})
  }

  render() {
    const {error, username, password, isTrue} = this.state
    return (
      <div className="login-page">
        <div className="login-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="sm-logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-img"
          />
          <div className="form-content">
            <form className="form-container" onSubmit={this.onSubmitDetails}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="lg-logo"
              />
              <label htmlFor="user" className="label">
                USERNAME
              </label>
              <input
                id="user"
                type="text"
                className="input"
                placeholder="Username"
                onChange={this.getUsername}
                value={username}
              />
              <label htmlFor="pass" className="label">
                PASSWORD
              </label>
              <input
                id="pass"
                type="password"
                className="input"
                placeholder="Password"
                onChange={this.getPassword}
                value={password}
              />
              <button type="submit" className="login-button">
                Login
              </button>
              {isTrue && <p className="error">*{error}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default LoginForm
