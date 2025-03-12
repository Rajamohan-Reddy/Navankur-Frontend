import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import RegistrationForm from './components/RegistrationForm'
import LoginForm from './components/LoginForm'
import ChangePasswordForm from './components/ChangePasswordForm'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/register" component={RegistrationForm} />
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/change-password" component={ChangePasswordForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
