import React, { useEffect, useState } from 'react'
import './Users.css'

export default function Users() {
  const [users, setUsers] = useState([])
  const [q, setQ] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editing, setEditing] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: 'Citizen', active: true })

  useEffect(() => {
    const raw = localStorage.getItem('users')
    if (raw) setUsers(JSON.parse(raw))
    else {
      const seed = [
        { id: 1, name: 'Alex Morgan', email: 'alex@example.com', role: 'Administrator', active: true },
        { id: 2, name: 'Sita Devi', email: 'sita@example.com', role: 'Citizen', active: true },
        { id: 3, name: 'Ravi Kumar', email: 'ravi@example.com', role: 'Operator', active: false }
      ]
      setUsers(seed)
      localStorage.setItem('users', JSON.stringify(seed))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users))
  }, [users])

  const openAdd = () => {
    setEditing(null)
    setForm({ name: '', email: '', role: 'Citizen', active: true })
    setModalOpen(true)
  }

  const openEdit = (u) => {
    setEditing(u.id)
    setForm({ name: u.name, email: u.email, role: u.role, active: u.active })
    setModalOpen(true)
  }

  const saveUser = (e) => {
    e.preventDefault()
    if (editing) {
      setUsers(prev => prev.map(u => u.id === editing ? { ...u, ...form } : u))
    } else {
      const id = users.length ? Math.max(...users.map(u => u.id)) + 1 : 1
      setUsers(prev => [{ id, ...form }, ...prev])
    }
    setModalOpen(false)
  }

  const toggleActive = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, active: !u.active } : u))
  }

  const deleteUser = (id) => {
    if (!confirm('Delete user?')) return
    setUsers(prev => prev.filter(u => u.id !== id))
  }

  const filtered = users.filter(u => {
    if (!q) return true
    const s = q.toLowerCase()
    return u.name.toLowerCase().includes(s) || u.email.toLowerCase().includes(s) || u.role.toLowerCase().includes(s)
  })

  return (
    <div className="users-root">
      <div className="users-header">
        <h2>Users</h2>
        <div className="users-controls">
          <input placeholder="Search name, email, role..." value={q} onChange={e => setQ(e.target.value)} />
          <button className="btn add" onClick={openAdd}>+ Add User</button>
        </div>
      </div>

      <div className="users-list">
        {filtered.map(u => (
          <div key={u.id} className="user-row">
            <div className="user-left">
              <div className="user-avatar">{u.name.charAt(0)}</div>
              <div className="user-info">
                <div className="user-name">{u.name}</div>
                <div className="user-email">{u.email}</div>
              </div>
            </div>
            <div className="user-right">
              <div className="user-role">{u.role}</div>
              <div className={`user-status ${u.active ? 'active' : 'inactive'}`}>{u.active ? 'Active' : 'Inactive'}</div>
              <div className="user-actions">
                <button onClick={() => openEdit(u)} className="btn small">Edit</button>
                <button onClick={() => toggleActive(u.id)} className="btn small">{u.active ? 'Deactivate' : 'Activate'}</button>
                <button onClick={() => deleteUser(u.id)} className="btn small danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="users-modal">
          <form className="users-form" onSubmit={saveUser}>
            <h3>{editing ? 'Edit User' : 'Add User'}</h3>
            <label>Name
              <input required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
            </label>
            <label>Email
              <input required type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
            </label>
            <label>Role
              <select value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))}>
                <option>Citizen</option>
                <option>Operator</option>
                <option>Administrator</option>
              </select>
            </label>
            <label>
              <input type="checkbox" checked={form.active} onChange={e => setForm(f => ({ ...f, active: e.target.checked }))} /> Active
            </label>

            <div className="users-form-actions">
              <button type="button" className="btn" onClick={() => setModalOpen(false)}>Cancel</button>
              <button type="submit" className="btn primary">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
