import './App.css';
import NavBar from './components/NavBar';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarUser from './components/NavBarUser';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<NavBar />}>

        <div className="App">
          {/* <NavBar/> */}
          {/* <Main/> */}
          <NavBarAdmin/>  
        </div>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
