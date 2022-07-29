import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Dummy } from './components/Dummy';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import {Routes, Route} from "react-router-dom";
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Login />
        <Dummy /> */}
        </Routes>
      </div>
  );
}

export default App;
