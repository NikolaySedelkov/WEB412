import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(()=>{
    // proxy
    fetch('/api/rand-int')
      .then(res => res.text())
      .then(alert);
  }, []);

  useEffect(()=>{
    // CORS
    fetch('http://localhost:9012/api/encript?value=12312223')
      .then(res => res.text())
      .then(alert);
  }, []);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
