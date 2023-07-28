import React from 'react';
import Button from './Button';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();
  
  return (
    <header id="rectangle">
      <div id="brand-and-menus">
        <h1> Streaming</h1>
        <div id="menus">
          <ul>
            <li> <i className="bi bi-house-fill" > </i> Inicio     </li> 
            <li> <i className="bi bi-film">      </i>      Categorias </li>
            <li> <i className="bi bi-tv-fill">   </i>   Ao vivo    </li>
          </ul>
        </div>
      </div>
        
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </header>
  );
};

export default Header;
