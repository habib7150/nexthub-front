import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import './App.css';

function App() {
  return <>
  <BrowserRouter>
    <NavBar />
    <Menu/>
    
  </BrowserRouter>
  </>;
}

export default App;
