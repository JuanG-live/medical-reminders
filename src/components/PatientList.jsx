import { useState } from "react";

function PatientList() {
    const [patients, setPatients] = useState([])
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')
    const [phone, setPhone] = useState('')

    function handleAddPatient(e) {
        e.preventDefault()
        const id = Date.now()
        const newPatient = {
            id: id, name: name, lastname: lastname, phone: phone
        }
        setPatients([...patients, newPatient])
        setName('')
        setLastname('')
        setPhone('')
    }


    return (
        <div>
            <h2>Mis pacientes!!</h2>
            <h3>Agregar Pacientes</h3>
            <form onSubmit={handleAddPatient}>
                <label>
                    Nombre: <input value={name}
                        onChange={e => setName(e.target.value)} />
                </label>
                <label>
                    Apellido: <input value={lastname}
                        onChange={e => setLastname(e.target.value)} />
                </label>
                <label>
                    Tel: <input value={phone}
                        onChange={e => setPhone(e.target.value)} />
                </label>
                <button type="submit">Agregar</button>
            </form>

            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        Nombre y apellido:  {patient.name} {patient.lastname} - Telefono: {patient.phone}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PatientList;