import React from 'react'
import './Infrastructure.css'

export default function Infrastructure() {
  const systems = [
    { id: 1, name: 'Power Grid', pct: 98, color: 'green' },
    { id: 2, name: 'Water Network', pct: 95, color: 'green' },
    { id: 3, name: 'Traffic Systems', pct: 87, color: 'yellow' },
    { id: 4, name: 'Street Lighting', pct: 92, color: 'green' }
  ]

  const alerts = [
    { id: 1, title: 'Traffic signal failure - Junction 12', time: '10 min ago', tone: 'alert' },
    { id: 2, title: 'Water pressure low - Zone 7', time: '25 min ago', tone: 'warning' },
    { id: 3, title: 'Scheduled maintenance - Sector 3', time: 'Tomorrow 6 AM', tone: 'info' }
  ]

  return (
    <div className="infra-root">
      <h2>Infrastructure Monitor</h2>

      <div className="infra-grid">
        <section className="infra-panel health">
          <div className="panel-title">System Health</div>
          <div className="health-list">
            {systems.map(s => (
              <div key={s.id} className="health-row">
                <div className="health-meta">
                  <div className="health-name">{s.name}</div>
                  <div className="health-pct">{s.pct}%</div>
                </div>
                <div className="health-bar">
                  <div className={`health-fill ${s.color}`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <aside className="infra-panel alerts">
          <div className="panel-title">Alerts</div>
          <div className="alerts-list">
            {alerts.map(a => (
              <div key={a.id} className={`alert-item ${a.tone}`}>
                <div className="alert-dot" />
                <div className="alert-body">
                  <div className="alert-title">{a.title}</div>
                  <div className="alert-time">{a.time}</div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  )
}
