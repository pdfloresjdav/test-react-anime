import React from 'react';
import {
  Link
} from 'react-router-dom';
import {SignInWithFacebook,SignInWithTwitter,SignInNative} from "./Firebase";
import {Right} from "../Right";
export const Login = () => {
  let url3 = `/register`;
    const handle = (e) => {
      const emailInp = document.getElementById("email-inp");
      const password = document.getElementById("password");

      SignInNative(emailInp,password);
      return true;

      
    };
    return(
        <div className='login'>
          <header className="App-body App-header">
        
            <img src="./assets/logo-a.png" className="logo_a" alt="logo" />
            <span className='anime-l anime-t'>anime<span className='yabu-t'>yabu.</span></span>
            <Link 
                    to="/"
                >
            <img src="./assets/arrow-l.png" className="arrow-l" alt="logo" />
            </Link>
            <img src="./assets/testimage1.png" className="img-l-p1" alt="logo" />
            <span className='jp-txt-l'>ひさしぶり!</span>
            <span className='txt-top-2'>Olá, sentimos sua falta!</span>
            <span className='email-txt1'>Login</span>
            <input type='email' className='email-inp1' id='email-inp' />
            <span className='password-r1'>Senha</span>
            <input type="password" className='password1' id='password' onBlur={handle}/>
            <img src="./assets/eye.png" className="eye11" alt="eye" />
            <span className='txt-bot-f'>Esqueci a senha</span>
            <line y1="1" x2="80" y2="1" stroke="white" stroke-width="2" className='line1'/>
            <span className='reb-foot-txt'>Usar Login Social</span>
            <line y1="1" x2="80" y2="1" stroke="white" stroke-width="2" className='line2'/>
            <img src="./assets/insta.png" className="insta" alt="instagram" onClick={SignInWithFacebook}/>
            <img src="./assets/twitter.png" className="twitter" alt="twitter" onClick={SignInWithTwitter}/>
            <img src="./assets/face.png" className="face" alt="facebook" onClick={SignInWithFacebook}/>
            <span className='reg-foot-w'>Não tem conta? <Link to={url3}><span  className='reg-foot-p'>Registre-se</span></Link></span>
            <img src="./assets/home-indicator.png" className="home-indicator" alt="home-indicator" />
          </header>
          <header className="App-body App-header-right">
              <Right />
          </header>
        </div> 
    )
}