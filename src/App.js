import './App.css';
import NavBar from './components/NavBar';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarUser from './components/NavBarUser';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
       {/* <NavBar/> */}
       {/* <Main/> */}
       <NavBarAdmin/>
    </div>
  );
}

export default App;
