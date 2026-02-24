import React, { useState } from 'react'
import './Feedback.css'

export default function Feedback() {
  const [target, setTarget] = useState('')
  const [rating, setRating] = useState(0)
  const [text, setText] = useState('')

  const items = [
    'Parks & Gardens',
    'Libraries',
    'Sports Centers',
    'Electricity',
    'Water Supply',
    'Waste Management'
  ]

  const submit = (e) => {
    e.preventDefault()
    const entry = { target, rating, text, createdAt: new Date().toISOString() }
    const prev = JSON.parse(localStorage.getItem('feedbacks') || '[]')
    prev.push(entry)
    localStorage.setItem('feedbacks', JSON.stringify(prev))
    alert('Thanks — feedback submitted!')
    setTarget('')
    setRating(0)
    setText('')
  }

  return (
    <div className="fb-root">
      <div className="fb-search-row">
        <input className="fb-search" placeholder="Search city services, places, information..." />
      </div>

      <h2 className="fb-title">Share Your Feedback</h2>

      <form className="fb-form" onSubmit={submit}>
        <label className="fb-label">What would you like to rate?</label>
        <select className="fb-select" value={target} onChange={(e) => setTarget(e.target.value)}>
          <option value="">Select an amenity or service</option>
          {items.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <label className="fb-label">Your Rating</label>
        <div className="fb-stars">
          {Array.from({ length: 5 }).map((_, i) => (
            <button key={i} type="button" className={`star ${i < rating ? 'on' : ''}`} onClick={() => setRating(i + 1)}>
              ★
            </button>
          ))}
        </div>

        <label className="fb-label">Your Feedback</label>
        <textarea className="fb-text" placeholder="Share your experience and suggestions..." value={text} onChange={(e) => setText(e.target.value)} />

        <div className="fb-actions">
          <button className="fb-submit" type="submit">Submit Feedback</button>
        </div>
      </form>
    </div>
  )
}
