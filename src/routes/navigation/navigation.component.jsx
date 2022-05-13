import { Outlet, Link } from 'react-router-dom';
import {Fragment,useContext} from 'react';

import { ReactComponent as Crwnlogo} from '../../assets/crown.svg';
import { userContext } from '../../contexts/user.context';

//imppporting the signoutuser from firebase
import { SignOutUser} from '../../utils/firebase/firebase.utils'

import './navigation.style.scss'

const NavigationBar = () => {
    //getting the user usecontex to be used in this component
    const { currentUser ,setCurrentUser} = useContext(userContext);

    // setting up the signout implementation
    const signOutHandler = async () => {
        await SignOutUser();
        setCurrentUser(null);
    }
    
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
                    {
                        //if there is a user signed in
                        currentUser ?(
                            //display signout and onclick execute signout
                            <span className = 'Signin' onClick={signOutHandler}>
                                Sign Out
                            </span>
                        )
                        //else
                        :
                            (//display signin 
                            <Link className = 'Signin' to='/auth'>
                                Sign in
                            </Link>)
                    }
                    
                </div>
            </div>
        <Outlet/>
        </Fragment>
    );
}

export default NavigationBar;