import React from 'react'
import './Amenities.css'

export default function Amenities() {
  const items = [
    { id: 1, title: 'Parks & Gardens', desc: '48 public parks across the city', color: 'green', rating: 4.2 },
    { id: 2, title: 'Libraries', desc: '12 public libraries with digital access', color: 'blue', rating: 4.8 },
    { id: 3, title: 'Sports Centers', desc: '24 sports facilities available', color: 'pink', rating: 4.1 }
  ]

  return (
    <div className="am-root">
      <div className="am-search-row">
        <input className="am-search" placeholder="Search city services, places, information..." />
      </div>

      <h2 className="am-title">City Amenities</h2>

      <div className="am-grid">
        {items.map(it => (
          <div key={it.id} className="am-card">
            <div className={`am-top ${it.color}`} />
            <div className="am-body">
              <div className="am-body-left">
                <div className="am-name">{it.title}</div>
                <div className="am-desc">{it.desc}</div>
                <div className="am-rating">{Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={`star ${i < Math.round(it.rating) ? 'on' : ''}`}>★</span>
                ))} <span className="rating-num">({it.rating})</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
