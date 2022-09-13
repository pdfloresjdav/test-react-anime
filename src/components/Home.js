import React from 'react';
import {
    Link
  } from 'react-router-dom';
import {Right} from "../Right";
export const Home = () => {
    return(
        <div className='login'>
          <header className="App-body App-header">
            
            <div className='left'>
                <div className='elipse1'>
                    <img src="./assets/testimage2.png" className="image-test-11" alt="logo" />
                </div>
                <span className='anime1 anime-t1'>anime<span className='yabu-t1'>yabu.</span></span>
                <span className='foot-text1'>Assista animes online em HD, legendado ou dublado,
        no seu celular ou computador. 
        Animeyabu, o seu portal de animes online!</span>

            </div> 
            <Link 
                    to="https://pdfloresjdav.github.io/test-react-anime/login"
                >
                <button className='btn-log'><span>Login</span></button>
            </Link>
            <Link 
                    to="https://pdfloresjdav.github.io/test-react-anime/register"
                >
            <button className='btn-reg1'><span>Registro</span></button>
            </Link>
            <img src="./assets/home-indicator.png" className="home-indicator" alt="home-indicator" />
          </header>
          <header className="App-body App-header-right">
              <Right />
          </header>
        </div> 
    )
}