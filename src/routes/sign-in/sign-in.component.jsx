
import { 
    signInWithGooglePopup, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components"

import Button from '../../components/button/button.component'

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response);
        const userDocRef = await createUserDocumentFromAuth(user);
    };



    return(
        <div>
            <h1>I am the sign-in page</h1>
            <Button onClick={logGoogleUser} buttonType='google'>
                Sign in with google Popup
            </Button>
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
