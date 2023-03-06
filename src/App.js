//import logo from './logo.svg';
import './App.css';
import Main from './Components/Main.js/Main';
import NavBar from './Components/Navbar/NavBar';

function App() {
    const data = {
      title: 'Hola espacio',
      text: 'Holiii ayuda en el espacio no hay oxigeno'
    }


    return (
      <div className="App">
        <NavBar />
        <Main {...data} />
      </div>
    );
}

export default App;
