
import { 
    signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.components"

const SignIn = () => {

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        // console.log(response);
        // const userDocRef = await createUserDocumentFromAuth(user);
    };



    return(
        <div>
            <h1>I am the sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
            <SignUpForm/>
        </div>
    );
};

export default SignIn;
