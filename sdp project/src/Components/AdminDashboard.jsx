import React, { useState } from 'react'
import './AdminDashboard.css'
import ManageServices from './ManageServices'
import Infrastructure from './Infrastructure'
import Reports from './Reports'
import Users from './Users'

export default function AdminDashboard({ user, onLogout }) {
  const [active, setActive] = useState('dashboard')
  const username = user?.username || 'Admin'

  const topStats = [
    { id: 1, title: 'Active Services', value: '24', sub: '+2 this week', tone: 'green' },
    { id: 2, title: 'Pending Issues', value: '12', sub: '3 high priority', tone: 'yellow' },
    { id: 3, title: 'Resolved Today', value: '8', sub: '+23% from avg', tone: 'blue' },
    { id: 4, title: 'Citizen Feedback', value: '4.6', sub: 'Avg rating', tone: 'purple' }
  ]

  const activities = [
    { id: 1, type: 'alert', title: 'High-priority: Road damage on Main St', time: '2m', action: 'Review' },
    { id: 2, type: 'success', title: 'Water issue resolved - Zone 4', time: '15m', action: 'Resolved' },
    { id: 3, type: 'info', title: 'Feedback received for Central Park', time: '1h', action: 'View' }
  ]

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <div className="admin-logo">SC</div>
          <div className="admin-title">
            <div className="admin-main">Smart City Hub</div>
            <div className="admin-sub">Administrator</div>
          </div>
        </div>

        <nav className="admin-nav">
          <button className={`admin-item ${active === 'dashboard' ? 'active' : ''}`} onClick={() => setActive('dashboard')}>Dashboard</button>
          <button className={`admin-item ${active === 'services' ? 'active' : ''}`} onClick={() => setActive('services')}>Manage Services</button>
          <button className={`admin-item ${active === 'infrastructure' ? 'active' : ''}`} onClick={() => setActive('infrastructure')}>Infrastructure</button>
          <button className={`admin-item ${active === 'reports' ? 'active' : ''}`} onClick={() => setActive('reports')}>Reports <span className="notif">12</span></button>
          <button className={`admin-item ${active === 'users' ? 'active' : ''}`} onClick={() => setActive('users')}>Users</button>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-header">
          <div className="admin-search">
            <input placeholder="Search services, reports, users..." />
          </div>

          <div className="admin-right">
            <div className="last-updated">Last updated: Just now</div>
            <div className="admin-user">
              <div className="admin-avatar">{username.charAt(0).toUpperCase()}</div>
              <div className="admin-meta">
                <div className="admin-name">{username}</div>
                <div className="admin-role">Administrator</div>
              </div>
              <button className="admin-logout" onClick={() => onLogout && onLogout()}>Logout</button>
            </div>
          </div>
        </header>

        <main className="admin-content">
          {active === 'dashboard' && (
            <>
              <h1>Dashboard</h1>

              <div className="top-stats">
                {topStats.map(s => (
                  <div key={s.id} className={`stat-card ${s.tone}`}>
                    <div className="stat-title">{s.title}</div>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-sub">{s.sub}</div>
                  </div>
                ))}
              </div>

              <div className="recent">
                <div className="recent-header">Recent Activity</div>
                <div className="recent-list">
                  {activities.map(a => (
                    <div key={a.id} className={`recent-item ${a.type}`}>
                      <div className="recent-left">
                        <div className="recent-icon">{a.type === 'alert' ? '⚠️' : a.type === 'success' ? '✅' : '💬'}</div>
                        <div className="recent-text">
                          <div className="recent-title">{a.title}</div>
                          <div className="recent-time">{a.time}</div>
                        </div>
                      </div>
                      <div className="recent-action"><button className="action-btn">{a.action}</button></div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {active === 'services' && (
            <>
              <ManageServices />
            </>
          )}

          {active === 'infrastructure' && (
            <Infrastructure />
          )}

          {active === 'reports' && (
            <Reports />
          )}

          {active === 'users' && (
            <Users />
          )}
        </main>
      </div>
    </div>
  )
}
