import React, { useState } from 'react'
import './App.css'
import Login from './Components/Login'
import CitizenDashboard from './Components/CitizenDashboard'
import AdminDashboard from './Components/AdminDashboard'

function App() {
  const [user, setUser] = useState(null)

  const handleLogin = ({ username, role }) => {
    setUser({ username, role })
  }

  const handleLogout = () => setUser(null)

  if (!user) return <Login onLogin={handleLogin} />

  return user.role === 'admin' ? (
    <AdminDashboard user={user} onLogout={handleLogout} />
  ) : (
    <CitizenDashboard user={user} onLogout={handleLogout} />
  )
}

export default App
