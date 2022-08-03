import React from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import './header.styles.scss';
import { signInWithGoogle } from "../../firebase/firebase.utils";




const Header = ({currentuser}) => (

    <div className="header">
        <Link to={'/'} className="logo-container">
            <Logo className="logo"/>
        </Link>
        
        <div className="options">
            <Link to={'/shop'} className="option">
                SHOP
            </Link>
            <Link to={'/contact'} className="option">
                 CONTACT
            </Link>
            {
                currentuser ?
                <div className="option" onClick= {() =>auth.signOut()}>
                    SIGN OUT
                </div>
                :<Link to={'/signin'} className="option" onClick={ signInWithGoogle }>SIGN IN</Link>
            }
            {
                currentuser ?
                <img src={localStorage.getItem('picture')} alt='pic' className="img-pic"/>
                :null
            }
            
            
           
        </div>
    </div>

)



export default Header;