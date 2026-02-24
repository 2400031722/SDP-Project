import React from 'react'
import './Infrastructure.css'

export default function Infrastructure() {
  const items = [
    { id: 1, title: 'Roads & Bridges', status: 'Good', info: 'Pavement condition, maintenance schedules' },
    { id: 2, title: 'Public Lighting', status: 'Partial', info: 'Street light outages and coverage' },
    { id: 3, title: 'Wastewater', status: 'Monitoring', info: 'Sewer network status, treatment plants' },
    { id: 4, title: 'Parks & Recreation', status: 'Good', info: 'Park maintenance, facilities' }
  ]

  return (
    <div className="infra-root">
      <div className="infra-search-row">
        <input className="infra-search" placeholder="Search infrastructure, assets, reports..." />
      </div>

      <h2 className="infra-title">Infrastructure</h2>

      <div className="infra-grid">
        {items.map(it => (
          <div key={it.id} className="infra-card">
            <div className="infra-left">
              <div className="infra-icon">🏗️</div>
              <div className="infra-info">
                <div className="infra-name">{it.title}</div>
                <div className="infra-desc">{it.info}</div>
              </div>
            </div>

            <div className="infra-meta">
              <div className={`infra-status`}>{it.status}</div>
              <a className="infra-link">View Details →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
