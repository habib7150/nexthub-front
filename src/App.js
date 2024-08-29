import {BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Menu from './components/Menu';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopCarousel from './components/TopCarousel';

function App() {
  return <>
  <BrowserRouter>
    <NavBar />
    <Menu/>
    <TopCarousel/>
       
  </BrowserRouter>
  </>;
}

export default App;
