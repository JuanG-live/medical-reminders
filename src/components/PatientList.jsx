
function PatientList() {
    const Patients = [
        { id: 1, name: 'Juan Maria', phone: '1234' },
        { id: 2, name: 'Rodrigo', phone: '54321' },
        { id: 3, name: 'Diego', phone: '999' }
    ]

    return (
        <div>
            <h2>Mis pacientes</h2>
            <ul>
                {Patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name} - {patient.phone}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PatientList;