import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarUser from './components/NavBarUser';
import Main from './components/Main';
import AdminLogin from './components/AdminLogin';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"; 
import ErrorPage from './components/ErrorPage';
import {useNavigate} from "react-router-dom"  ;

function App() {
  // const navigate = useNavigate();
  return (

    <>

      <Router>  
        <nav>
       
      <Routes>
        <Route path="/" element={<NavBar/>}>
          {/* <Route path="/admin-page" element={<NavBarAdmin/>}/>
          <Route path="/user-page" element={<NavBarUser/>}/>
          <Route path="*" element={<ErrorPage />} /> */}
          {/* <Link to="#main-nav" >
            main nav
          </Link> */}
          </Route>
      </Routes>
      </nav>

      </Router>
       
    </>
   
  )
}

export default App;
