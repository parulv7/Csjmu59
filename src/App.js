import logo from './logo.svg';
import './App.css';
import Main from './Components/Basic/Main';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
