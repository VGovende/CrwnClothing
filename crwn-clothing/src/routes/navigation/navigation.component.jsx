import { Outlet, Link } from 'react-router-dom';
import {Fragment} from 'react';

import { ReactComponent as Crwnlogo} from '../../assets/crown.svg';

import './navigation.style.scss'


const NavigationBar = () => {
    return(
        <Fragment>
            <div className = 'navigation'>
                <Link className = 'logo-container' to='/'>
                    <Crwnlogo className = 'logo'/>
                </Link>
                <div className = 'nav-links-container'>
                    <Link className = 'Shop-link' to='/shop'>
                        Shop
                    </Link>
                    <Link className = 'Signin' to='/sign-in'>
                        Sign in
                    </Link>
                </div>
            </div>
        <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;