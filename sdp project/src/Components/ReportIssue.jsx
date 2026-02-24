import React, { useState } from 'react'
import './ReportIssue.css'

export default function ReportIssue() {
  const [category, setCategory] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState('Medium')

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = { category, location, description, priority, createdAt: new Date().toISOString() }
    console.log('Report submitted', payload)
    alert('Report submitted — thank you!')
    // reset form
    setCategory('')
    setLocation('')
    setDescription('')
    setPriority('Medium')
  }

  return (
    <div className="ri-root">
      <h2>Report an Issue</h2>

      <form className="ri-form" onSubmit={handleSubmit}>
        <label className="ri-label">Issue Category</label>
        <select className="ri-select" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option value="Electricity">Electricity</option>
          <option value="Water">Water Supply</option>
          <option value="Waste">Waste Management</option>
          <option value="Fire">Fire Department</option>
          <option value="Roads">Roads & Bridges</option>
        </select>

        <label className="ri-label">Location</label>
        <input className="ri-input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location or address" />

        <label className="ri-label">Description</label>
        <textarea className="ri-textarea" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the issue in detail..."></textarea>

        <label className="ri-label">Priority</label>
        <div className="ri-priority">
          <label className="ri-radio"><input type="radio" name="priority" value="Low" checked={priority==='Low'} onChange={() => setPriority('Low')} /> <span>Low</span></label>
          <label className="ri-radio"><input type="radio" name="priority" value="Medium" checked={priority==='Medium'} onChange={() => setPriority('Medium')} /> <span>Medium</span></label>
          <label className="ri-radio"><input type="radio" name="priority" value="High" checked={priority==='High'} onChange={() => setPriority('High')} /> <span>High</span></label>
        </div>

        <div className="ri-actions">
          <button type="submit" className="ri-submit">Submit Report</button>
        </div>
      </form>
    </div>
  )
}
