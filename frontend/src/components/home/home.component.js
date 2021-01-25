import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom'

export default function Home() {

    return (
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Link to="/teste">Ir para a página sobre \o/</Link>^^ Reload sem Carregar
        </header>
      </div>
    );
  }
