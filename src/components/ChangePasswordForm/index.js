import {Component} from 'react'
import './index.css'
class ChangePasswordForm extends Component {
  state = {
    username: '',
    oldPassword: '',
    newPassword: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeOldPassword = event => {
    this.setState({oldPassword: event.target.value})
  }

  onChangeNewPassword = event => {
    this.setState({newPassword: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, oldPassword, newPassword} = this.state

    const userDetails = {username, oldPassword, newPassword}
    const url = 'https://user-naukar-backend.onrender.com/change-password' // Your backend URL

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    try {
      const response = await fetch(url, options)
      const data = await response.text() // Backend sends plain text response

      console.log('Response Data:', data)

      if (response.ok) {
        alert('Password updated successfully! Click OK to login.')
        const {history} = this.props
        history.push('/login') // Redirect to login page
      } else {
        this.setState({showSubmitError: true, errorMsg: data})
      }
    } catch (error) {
      console.error('Fetch Error:', error)
    }
  }

  render() {
    const {username, oldPassword, newPassword, showSubmitError, errorMsg} =
      this.state

    return (
      <div className="change-password-form-container">
        <form className="change-form-container" onSubmit={this.submitForm}>
          <h2>Change Password</h2>
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="password-input-field"
            value={username}
            onChange={this.onChangeUsername}
          />

          <label className="input-label" htmlFor="oldPassword">
            Old Password
          </label>
          <input
            type="password"
            id="oldPassword"
            className="password-input-field"
            value={oldPassword}
            onChange={this.onChangeOldPassword}
          />

          <label className="input-label" htmlFor="newPassword">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className="password-input-field"
            value={newPassword}
            onChange={this.onChangeNewPassword}
          />

          <button type="submit" className="login-button">
            Change Password
          </button>

          {showSubmitError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default ChangePasswordForm
