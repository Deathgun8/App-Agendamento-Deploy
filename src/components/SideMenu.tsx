import { useState } from 'react';
import Calendar from './Calendar'; // Importe seu componente de calendário aqui
import '../App.css'; // Para estilização
import ListaPacientes from './ListaPacientes';

function SideMenu() {
  // Estado que controla qual componente está sendo exibido
  const [activeComponent, setActiveComponent] = useState('calendar');

  // Função para alternar entre os componentes
  const renderComponent = () => {
    if (activeComponent === 'calendar') {
      return <Calendar />; // Renderiza o calendário
    } else if (activeComponent === 'patients') {
      return <ListaPacientes/>; // Renderiza a lista de pacientes
    }
  };

  return (
    <div className="app-container">
      {/* Menu Lateral */}
      <aside className="sidebar">
        <ul>
          <li onClick={() => setActiveComponent('calendar')}>Calendário</li>
          <li onClick={() => setActiveComponent('patients')}>Pacientes</li>
        </ul>
      </aside>

      {/* Área principal onde os componentes serão exibidos */}
      <main className="content">
        {renderComponent()} {/* Aqui renderiza o componente escolhido */}
      </main>
    </div>
  );
}

export default SideMenu;
