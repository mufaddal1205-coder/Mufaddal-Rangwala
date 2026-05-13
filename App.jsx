function App() {
  return (
    <div style={{ padding: '50px', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>⚡ Mufaddal Stamina Dashboard</h1>
      <p style={{ fontSize: '1.5rem', color: '#2563eb' }}>
        Welcome, Intern: <strong>{import.meta.env.VITE_INTERN_NAME}</strong>
      </p>
    </div>
  )
}

export default App