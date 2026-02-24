import React from 'react'
import './PublicServices.css'

export default function PublicServices() {
  const services = [
    { id: 1, title: 'Electricity', desc: 'Power supply, billing, outage reports', status: 'Active', badge: 'green' },
    { id: 2, title: 'Water Supply', desc: 'Water distribution, quality reports', status: 'Active', badge: 'green' },
    { id: 3, title: 'Waste Management', desc: 'Collection schedules, recycling info', status: 'Active', badge: 'green' },
    { id: 4, title: 'Fire Department', desc: 'Emergency response, fire safety', status: '24/7', badge: 'orange' }
  ]

  return (
    <div className="ps-root">
      <div className="ps-search-row">
        <input className="ps-search" placeholder="Search city services, places, information..." />
      </div>

      <h2 className="ps-title">Public Services</h2>

      <div className="ps-grid">
        {services.map(s => (
          <div key={s.id} className="ps-card">
            <div className="ps-card-left">
              <div className="ps-icon">🔷</div>
              <div className="ps-info">
                <div className="ps-name">{s.title}</div>
                <div className="ps-desc">{s.desc}</div>
              </div>
            </div>

            <div className="ps-card-right">
              <div className={`ps-badge ${s.badge}`}>{s.status}</div>
              <a className="ps-link">View Details →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
