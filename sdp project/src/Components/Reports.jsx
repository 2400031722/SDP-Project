import React, { useState } from 'react'
import './Reports.css'

export default function Reports() {
  const [tab, setTab] = useState('all')
  const [reports, setReports] = useState([
    { id: '#RPT-2024-0847', priority: 'High', title: 'Road damage on Main Street near Central Park', dept: 'Road & Traffic', time: '2 hours ago', status: 'Pending' },
    { id: '#RPT-2024-0846', priority: 'Medium', title: 'Street light not working on Oak Avenue', dept: 'Electricity', time: '5 hours ago', status: 'In Progress' },
    { id: '#RPT-2024-0845', priority: 'Resolved', title: 'Water leak in Riverside neighborhood', dept: 'Water Supply', time: '1 day ago', status: 'Resolved' }
  ])

  const tabs = [
    { key: 'all', label: 'All' },
    { key: 'pending', label: 'Pending' },
    { key: 'inprogress', label: 'In Progress' },
    { key: 'resolved', label: 'Resolved' }
  ]

  const filterReports = () => {
    if (tab === 'all') return reports
    if (tab === 'pending') return reports.filter(r => r.status.toLowerCase().includes('pending'))
    if (tab === 'inprogress') return reports.filter(r => r.status.toLowerCase().includes('progress'))
    if (tab === 'resolved') return reports.filter(r => r.status.toLowerCase().includes('resolved'))
    return reports
  }

  const cycleStatus = (idx) => {
    setReports(prev => prev.map((r,i) => i===idx ? { ...r, status: r.status === 'Pending' ? 'In Progress' : r.status === 'In Progress' ? 'Resolved' : 'Pending' } : r))
  }

  return (
    <div className="reports-root">
      <h2>Citizen Reports</h2>

      <div className="reports-panel">
        <div className="reports-tabs">
          {tabs.map(t => (
            <button key={t.key} className={`r-tab ${tab===t.key? 'active':''}`} onClick={() => setTab(t.key)}>{t.label}</button>
          ))}
        </div>

        <div className="reports-list">
          {filterReports().map((r, idx) => (
            <div key={r.id} className="report-row">
              <div className="report-left">
                <div className={`report-badge ${r.priority.toLowerCase()}`}>{r.id}</div>
                <div className="report-content">
                  <div className="report-title">{r.title} <span className={`prio ${r.priority.toLowerCase()}`}>{r.priority}</span></div>
                  <div className="report-desc">{r.title}</div>
                </div>
              </div>

              <div className="report-right">
                <div className="report-dept">{r.dept}</div>
                <div className="report-meta">
                  <div className={`report-status ${r.status.replace(/\s+/g,'').toLowerCase()}`}>{r.status}</div>
                  <div className="report-time">{r.time}</div>
                  <button className="report-action" onClick={() => cycleStatus(idx)}>{r.status === 'Pending' ? 'Assign' : r.status === 'In Progress' ? 'In Progress' : 'Closed'}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
