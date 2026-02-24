import React, { useState } from 'react'
import './CitizenDashboard.css'
import PublicServices from './PublicServices'
import Infrastructure from './Infrastructure'
import Amenities from './Amenities'
import ReportIssue from './ReportIssue'
import Feedback from './Feedback'

export default function CitizenDashboard({ user, onLogout }) {
  const username = user?.username || 'User'
  const [tab, setTab] = useState('overview')

  return (
    <div className="dash-root">
      <aside className="dash-sidebar">
        <div className="dash-brand">
          <div className="dash-logo">🏙️</div>
          <div className="dash-title">
            <div className="dash-main-title">Smart City Hub</div>
            <div className="dash-sub">Citizen Portal</div>
          </div>
        </div>

        <nav className="dash-nav">
          <button className={`nav-item ${tab === 'overview' ? 'active' : ''}`} onClick={() => setTab('overview')}>Overview</button>
          <button className={`nav-item ${tab === 'public' ? 'active' : ''}`} onClick={() => setTab('public')}>Public Services</button>
          <button className={`nav-item ${tab === 'infra' ? 'active' : ''}`} onClick={() => setTab('infra')}>Infrastructure</button>
          <button className={`nav-item ${tab === 'amenities' ? 'active' : ''}`} onClick={() => setTab('amenities')}>Amenities</button>
          <button className={`nav-item ${tab === 'report' ? 'active' : ''}`} onClick={() => setTab('report')}>Report Issue</button>
          <button className={`nav-item ${tab === 'feedback' ? 'active' : ''}`} onClick={() => setTab('feedback')}>Feedback</button>
        </nav>
      </aside>

      <div className="dash-main">
        <header className="dash-header">
          <div className="dash-search">
            <input placeholder="Search city services, places, information..." />
          </div>

          <div className="dash-user">
            <div className="dash-user-info">
              <div className="dash-user-avatar">{username.charAt(0).toUpperCase()}</div>
              <div className="dash-user-meta">
                <div className="dash-user-name">{username}</div>
                <div className="dash-user-role">Citizen</div>
              </div>
            </div>
            <button className="dash-logout" onClick={() => onLogout && onLogout()}>Logout</button>
          </div>
        </header>

        <main className="dash-content">
          {tab === 'overview' && (
            <>
              <h2>City Overview</h2>
              <div className="overview-cards">
                <div className="card stat">
                  <div className="card-title">Population</div>
                  <div className="card-value">1.2M</div>
                </div>
                <div className="card stat">
                  <div className="card-title">Air Quality</div>
                  <div className="card-value good">Good</div>
                </div>
                <div className="card stat">
                  <div className="card-title">Weather</div>
                  <div className="card-value">24°C</div>
                </div>
                <div className="card stat">
                  <div className="card-title">Traffic</div>
                  <div className="card-value moderate">Moderate</div>
                </div>
              </div>

              <h3>Quick Access</h3>
              <div className="quick-cards">
                <div className="card big">Emergency</div>
                <div className="card big">Transport</div>
                <div className="card big">Healthcare</div>
                <div className="card big">Education</div>
              </div>
            </>
          )}

          {tab === 'public' && <PublicServices />}

          {tab === 'infra' && <Infrastructure />}

          {tab === 'amenities' && <Amenities />}

          {tab === 'report' && <ReportIssue />}

          {tab === 'feedback' && <Feedback />}

          {tab !== 'overview' && tab !== 'public' && tab !== 'infra' && tab !== 'amenities' && tab !== 'report' && tab !== 'feedback' && (
            <div style={{ padding: 20 }}>
              <h2>{tab.charAt(0).toUpperCase() + tab.slice(1)}</h2>
              <p style={{ color: 'var(--muted)' }}>Content for {tab} will go here.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
