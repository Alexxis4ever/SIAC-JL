import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Header } from "./components/layouts/Header/Header";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import { Home } from "./components/pages/Home/Home";

function App() {
  return (
    <>
    <Router>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
    </Router>
    <ToastContainer/>
    </>
  )
}

export default App;
