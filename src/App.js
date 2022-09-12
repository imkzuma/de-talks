//Router
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

//CSS Import
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "font-awesome/css/font-awesome.min.css";


//Home
import Home from './components/home/Home';

//Auth
import Daftar from './components/auth/Daftar';
import Login from './components/auth/Login';
import PageClass from './components/class/index';
import TentangKita from './components/about';

export default function App() {
  return (
    <Router>
      <Routes>
        //Home Router
        <Route path = "/" element = { <Home /> } />

        //Kelas Router
        <Route path = "/Kelas" element = { <PageClass /> } />

        //Auth Router
        <Route path = "/Daftar" element = { <Daftar /> } />
        <Route path = "/Login" element =  { <Login /> } />

        //About Router
        <Route path = "/TentangKita" element = { <TentangKita /> } />
      </Routes>
    </Router>
  );
}