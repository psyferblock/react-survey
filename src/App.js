import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import NavBarAdmin from './components/NavBarAdmin';
import NavBarUser from './components/NavBarUser';
import Main from './components/Main';
import AdminLogin from './components/AdminLogin';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"; 1
// import { Link } from '@react-navigation/native';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <>
      yo
      <Router>  
        <nav>
          <Link>admin </Link>
          <Link>user</Link>
          <Link></Link>

        </nav>
      <Routes>
        <Route path="/" element={<NavBar/>}>
          <Route path="admin-page" element={NavBarAdmin}/>
          <Route path="user-page" element={NavBarUser}/>
          <Route path="*" element={<ErrorPage />} />
          {/* <Link to="#main-nav" >
            main nav
          </Link> */}
          </Route>
      </Routes>
      </Router>
       
    </>
   
  )
}

export default App;
