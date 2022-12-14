import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Dummy } from './components/Dummy';
import { Navbar } from './components/Navbar';
import  {Home}  from './components/Home';
import {Routes, Route} from "react-router-dom";
import { Individualprod } from './components/Individualprod';
import {Cart} from "./components/Cart"
function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/prod/:id" element={<Individualprod />}></Route>
        {/* <Login />
        <Dummy /> */}
        </Routes>
      </div>
  );
}

export default App;
