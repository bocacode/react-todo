import React, { createContext, useState } from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import firebase from 'firebase'
import Home from './scenes/Home'
import Login from './scenes/Login'
import Signup from './scenes/Signup'
import TopMenu from './components/TopMenu'
import { firebaseConfig } from './fbConfig'
import 'antd/dist/antd.css'

firebase.initializeApp(firebaseConfig)
const fbAuth = firebase.auth()

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  return (
    <UserContext.Provider value={{ user, setUser, fbAuth }}>
      <Router>
        <TopMenu />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
