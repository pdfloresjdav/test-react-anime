import React from 'react';
import {
    Link
  } from 'react-router-dom';
import {SignInWithFacebook,SignInWithTwitter, CreateNative} from "./Firebase";
import {Right} from "../Right";
export const Register = () => {
    const handle = (e) => {
        const emailInp = document.getElementById("email-inp");
        const password = document.getElementById("password");
        const passwordc = document.getElementById("passwordc");
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (emailInp.value.match(validRegex)) {

            if(password===passwordc){
                CreateNative(emailInp,password);
                return true;
            }
            else{
                return false;
            }

        }
        else{
            const invEmail = document.getElementById("inv-email");
            invEmail.classList.remove("hide");
            return false;
        }
        
    };
    return(
        <div className='register'>
            <header className="App-body App-header">
        
            <img src="./assets/logo-a.png" className="logo_a" alt="logo" />
            <span className='anime-l anime-t'>anime<span className='yabu-t'>yabu.</span></span>
            <Link 
                    to="https://pdfloresjdav.github.io/test-react-anime/"
                >
            <img src="./assets/arrow-l.png" className="arrow-l" alt="logo" />
            </Link>
            <img src="./assets/testimage.png" className="img-l-p" alt="logo" />
            <span className='jp-txt'>ようこそ!</span>
            <span className='txt-top-1'>Bem-vindo(a)!</span>
            <span className='email-txt'>Email</span>
            <input type='email' className='email-inp' id='email-inp' />
            <span className='inv-email hide' id='inv-email'>Email Inválido</span>
            <span className='password-r'>Senha</span>
            <input type="password" className='password' id='password'/>
            <img src="./assets/eye.png" className="eye1" alt="eye" />
            <span className='passwordc-r'>Confirmar Senha</span>
            <input type="password" className='passwordc' id='passwordc'/>
            <img src="./assets/eye.png" className="eye2" alt="eye" />
            <button className='btb-reg' onClick={handle}><span>Registrar</span></button>
            <line y1="1" x2="80" y2="1" stroke="white" stroke-width="2" className='line1'/>
            <span className='reb-foot-txt'>Ou se registre com</span>
            <line y1="1" x2="80" y2="1" stroke="white" stroke-width="2" className='line2'/>
            <img src="./assets/insta.png" className="insta" alt="instagram" onClick={SignInWithFacebook}/>
            <img src="./assets/twitter.png" className="twitter" alt="twitter" onClick={SignInWithTwitter}/>
            <img src="./assets/face.png" className="face" alt="facebook" onClick={SignInWithFacebook}/>
            <span className='reg-foot-w'>Já é membro? <Link to="/login"><span  className='reg-foot-p'>Faça Login</span></Link></span>
            <img src="./assets/home-indicator.png" className="home-indicator" alt="home-indicator" />
        
            </header>
            <header className="App-body App-header-right">
                <Right />
            </header>
        </div> 
    )
}