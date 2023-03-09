import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './style.css'

function Sidebar() {
  return (
    <Menu>
      <Link to="/" className="menu-item">
        Home
      </Link>
      <Link to="/releases" className="menu-item">
        Lançamentos
      </Link>
      <Link to="/inTheaters" className="menu-item">
        Em cartaz
      </Link>
      <Link to="/wellRated" className="menu-item">
        Mais bem avaliados
      </Link>
      <Link to="/" className="menu-item">
        Filmes Populares
      </Link>
    </Menu>
    
  );
};

export default Sidebar