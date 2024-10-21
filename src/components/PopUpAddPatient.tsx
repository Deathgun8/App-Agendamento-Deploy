import React, { useState } from 'react';
import './PopUpAddPatient.css';

interface AddPatientPopUpProps {
  onClose: () => void;
  onAddPatient: (newPatient: { id: number; name: string; age: number; CPF: string }) => void;
}

const PopUpAddPatient: React.FC<AddPatientPopUpProps> = ({ onClose, onAddPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [CPF, setCPF] = useState('');

  const handleAdd = () => {
    if (name && age && CPF) {
      const newPatient = {
        id: Math.random(), // Gera um ID aleatório
        name,
        age: parseInt(age, 10),
        CPF,
      };
      onAddPatient(newPatient);
      onClose(); // Fechar o PopUp após adicionar
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <h3>Adicionar novo paciente</h3>
        <label>
          Nome:
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Idade:
          <input value={age} onChange={(e) => setAge(e.target.value)} type="number" />
        </label>
        <label>
          CPF:
          <input value={CPF} onChange={(e) => setCPF(e.target.value)} />
        </label>
        <button className='button' onClick={handleAdd}>Add Patient</button>
        <button className='button' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default PopUpAddPatient;
