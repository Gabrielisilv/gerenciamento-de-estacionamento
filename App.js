import logo from './logo.svg';
import './App.css';

import {route, routes} from 'react-router-dom';

import header from './componetes/header';
import footer from './componetes/footer';

import home from './pages/home';
import CadastroReserva from './pages/cadastroReserva';

function App() {
  return (
    <div className="app">
      <header/>

      <main>
        <routes>
          <route exact path="/" element={<home />}/>
          <route path="/cadastro" element={<CadastroReserva/>}/>
        </routes>
      </main>

      <footer/>
    </div>
  );
}
    
export default App;