import React, { FC } from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom";


const App: FC = () => {
  return (
    <div className="App">
      <header>
        <Link to={'/'}><h1>Drinkos</h1></Link>
        <nav>
          <Link to={'/'}>Link one</Link>
          <Link to={'/'}>Link two</Link>
          <Link to={'/'}>Link three</Link>
        </nav>
      </header>
      <hr />
      <main className='content'>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
