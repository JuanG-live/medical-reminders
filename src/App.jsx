import { useState } from 'react'
import PatientList from './components/patientList'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <h1>Sistema de agenda Medica</h1>
    <p>Version MVP - En desarrollo </p>
    
    <PatientList />
  </div>
  )
}

export default App
