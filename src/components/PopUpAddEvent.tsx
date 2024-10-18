import React, { useState } from 'react';

// Definindo as props do modal
interface PopUpAddEventProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (eventData: { title: string; start: string; end: string }) => void;
}

const PopUpAddEvent: React.FC<PopUpAddEventProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  if (!isOpen) return null; // Não renderiza o modal se não estiver aberto

  const handleSubmit = (e: React.FormEvent) => {
    console.log("dados do evento a serem salvos", {title, start, end});
    e.preventDefault();
    onSave({ title, start, end });
    onClose(); // Fecha o modal após salvar
  };

  return (
    <div className="popUp">
      <div className="popUp-content">
        <h2>Adicionar Evento</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Título do Evento</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Início</label>
            <input
              type="datetime-local"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Fim</label>
            <input
              type="datetime-local"
              value={end}
              onChange={(e) => setEnd(e.target.value)}
              required
            />
          </div>
          <button type="submit">Confirmar</button>
          <button type="button" onClick={onClose}>
            Cancelar
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUpAddEvent;
