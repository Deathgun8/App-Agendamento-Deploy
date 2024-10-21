import React, { useState } from 'react';
import './ListaPacientes.css'
import PopUpAddPatient from './PopUpAddPatient';

interface Patient {
  id: number;
  name: string;
  age: number;
  CPF: string;
}

const PatientList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([
    { id: 1, name: 'Arthur', age: 18, CPF: 'Healthy' },
  ]);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleAddPatient = (newPatient: Patient) => {
    setPatients([...patients, newPatient]);
  };

  return (
    <div className='list-wrap'>
      <h2 className='list-title'>Lista de pacientes</h2>
      <ul className='list-items'>
        {patients.map(patient => (
          <li key={patient.id}>
            {patient.name}           {patient.age}                 {patient.CPF}
          </li>
        ))}
      </ul>

      <button className='submit-patient' onClick={() => setIsPopUpOpen(true)}>Adicionar novo paciente</button>

      {isPopUpOpen && (
        <PopUpAddPatient
          onClose={() => setIsPopUpOpen(false)}
          onAddPatient={handleAddPatient}
        />
      )}
    </div>
  );
};

export default PatientList;
