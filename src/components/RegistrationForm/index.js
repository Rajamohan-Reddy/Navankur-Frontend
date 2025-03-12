import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class RegisterForm extends Component {
  state = {
    username: '',
    name: '',
    password: '',
    gender: '',
    location: '',
    showSubmitError: false,
    errorMsg: '',
    showSubmitSuccess: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeGender = event => {
    this.setState({gender: event.target.value})
  }

  onChangeLocation = event => {
    this.setState({location: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, name, password, gender, location} = this.state
    const userDetails = {username, name, password, gender, location}
    const url = 'https://user-naukar-backend.onrender.com/register' // Backend URL
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.text()
    if (response.ok === true) {
      this.setState({showSubmitSuccess: true})
      const {history} = this.props
      history.push('/login')
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderNameField = () => {
    const {name} = this.state
    return (
      <>
        <label className="input-label" htmlFor="name">
          NAME
        </label>
        <input
          type="text"
          id="name"
          className="input-field"
          value={name}
          onChange={this.onChangeName}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderGenderField = () => {
    const {gender} = this.state
    return (
      <>
        <label className="input-label" htmlFor="gender">
          GENDER
        </label>
        <select
          id="gender"
          className="input-field"
          value={gender}
          onChange={this.onChangeGender}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </>
    )
  }

  renderLocationField = () => {
    const {location} = this.state
    return (
      <>
        <label className="input-label" htmlFor="location">
          LOCATION
        </label>
        <input
          type="text"
          id="location"
          className="input-field"
          value={location}
          onChange={this.onChangeLocation}
        />
      </>
    )
  }

  render() {
    const {showSubmitSuccess, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <h2 className="main-heading">Registration Form</h2>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderNameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderGenderField()}</div>
          <div className="input-container">{this.renderLocationField()}</div>
          <button type="submit" className="login-button">
            Register
          </button>
          {showSubmitSuccess && (
            <p className="success-message">User added successfully</p>
          )}
          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default RegisterForm
