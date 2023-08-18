import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HeaderFinance from './components/HeaderFinance';
import SideBar from './components/SideBar';
import ContentFinance from './components/ContentFinance';
import FooterFinance from './components/FooterFinance';

import PageHome from './pages/home/PageHome';
import PageAbout from './pages/home/PageAbout';

import PageInfoCompte from './pages/compte/PageInfoCompte';
import PageChangePassword from './pages/compte/PageChangePassword';

import PageReportData from './pages/reporting/PageReportData';
import PageReporGraph from './pages/reporting/PageReportGraph';

import PageProfil from './pages/securite/PageProfil';
import PageUtilisateur from './pages/securite/PageUtilisateur';
import PageTracabilite from './pages/securite/PageTracabilite';
import PageTracabiliteAction from './pages/securite/PageTracabiliteAction';
import PageWorkflowProcess from './pages/parametre/PageWorkflowProcess';
import PageWorkflowEtape from './pages/parametre/PageWorkflowEtape';

function App(){
  //state
  const messageEchec ="";
  const messageOk ="";

  //affichage
  return(
    <div className="App">
      <HeaderFinance />
      <SideBar />
      
      <div class="content-wrapper" style={{padding:8}} >          
        <Routes>
          <Route path='/' element={<PageHome/>}></Route>
          <Route path='/about' element={<PageAbout/>}></Route>
          <Route path='*' element={<PageHome/>}></Route>
          
          <Route path='/reportData' element={<PageReportData/>}></Route>
          <Route path='/reportGraph' element={<PageReporGraph/>}></Route>

          <Route path='/infoCompte' element={<PageInfoCompte/>}></Route>
          <Route path='/changePassword' element={<PageChangePassword/>}></Route>
          
          <Route path='/wProcess' element={<PageWorkflowProcess/>}></Route>
          <Route path='/wEtape' element={<PageWorkflowEtape/>}></Route>
          
          <Route path='/profil' element={<PageProfil/>}></Route>
          <Route path='/utilisateur' element={<PageUtilisateur/>}></Route>
          <Route path='/tracabilite' element={<PageTracabilite/>}></Route>
          <Route path='/tracabiliteAction' element={<PageTracabiliteAction/>}></Route>
        </Routes>
      </div>

      <FooterFinance/>
    </div>


    

    /*
    <div>
      <HeaderFinance/>
      <SideBarFinance />
      <ContentFinance />
      <FooterFinance />
    </div>*/
    
   
    );
}


export default App;
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !
        </a>
      </header>
    </div>
  );
}*/

