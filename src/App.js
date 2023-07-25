import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './rotas/Header/header'
import './App.css';
import Informacoes from './rotas/Informacoes/informacoes';
import Logo from './rotas/Header/logoBaner-removebg-preview.png'
import Footer from './rotas/Footer/footer';

export default function App() {
  return (
    <div className='App'>
      <div className='app-container'>
        <Header />

        <main className='main'>
          <Outlet />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}