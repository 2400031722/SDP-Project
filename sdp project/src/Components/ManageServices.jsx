import React, { useState } from 'react'
import './ManageServices.css'

export default function ManageServices() {
  const [services] = useState([
    { id: 1, icon: '⚡', title: 'Electricity Department', desc: 'Power supply, billing, outage management', status: 'Active' },
    { id: 2, icon: '💧', title: 'Water Supply', desc: 'Distribution, quality control, maintenance', status: 'Active' },
    { id: 3, icon: '🚌', title: 'Public Transport', desc: 'Bus, metro, schedules, routes', status: 'Maintenance' }
  ])

  const handleEdit = (id) => {
    alert('Edit service: ' + id)
  }

  return (
    <div className="manage-root">
      <div className="manage-header">
        <h2>Manage Services</h2>
        <button className="add-service">+ Add Service</button>
      </div>

      <div className="service-list">
        {services.map(s => (
          <div key={s.id} className="service-card">
            <div className="svc-left">
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-info">
                <div className="svc-title">{s.title}</div>
                <div className="svc-desc">{s.desc}</div>
              </div>
            </div>

            <div className="svc-right">
              <div className={`svc-status ${s.status.toLowerCase()}`}>{s.status}</div>
              <button className="svc-edit" onClick={() => handleEdit(s.id)}>✏️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
