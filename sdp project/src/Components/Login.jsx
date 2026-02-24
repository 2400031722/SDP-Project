import React, { useState } from 'react'
import './Login.css'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: replace with real auth integration
    console.log({ username, password, role })
    if (onLogin) onLogin({ username, role })
  }

  return (
    <div className="sch-root">
      <header className="sch-header">
        <div className="sch-logo">🏙️</div>
        <h1>Smart City Hub</h1>
        <p className="sch-sub">Your gateway to city services and information</p>
      </header>

      <main className="sch-main">
        <div className="sch-card">
          <h2 className="sch-welcome">Welcome Back</h2>

          <form className="sch-form" onSubmit={handleSubmit}>
            <label className="sch-label">Username</label>
            <input
              className="sch-input"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label className="sch-label">Password</label>
            <input
              className="sch-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label className="sch-label">Role</label>
            <select
              className="sch-select"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select your role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>

            <button type="submit" className="sch-btn sch-btn-primary">Login</button>

            <div className="sch-footer-row">
              <span>Don't have an account?</span>
              <button type="button" className="sch-btn sch-btn-secondary">Create Account</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
