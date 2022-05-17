import {useState,useContext} from 'react';
import {signInWithGooglePopup,createUserDocumentFromAuth,signAuthInWithEmailAndPassword} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss'
import Button from '../button/button.component'

import {userContext} from '../../contexts/user.context'

const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields;
    
    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }    

    const SignInWithGoogle = async () => {
        await signInWithGooglePopup();
    };

    const handleSubmit =async (event)=>{
        event.preventDefault();

        try {
            await signAuthInWithEmailAndPassword(email, password);
            //setting the current user
                // setCurrentUser(user);
            // console.log(user); 
            resetFormFields();
        } catch (error) {
            if (error.code ==='auth/wrong-password') {
                alert('incorrect password for email');
            }else if (error.code ==='auth/user-not-found') {
                alert('incorrect email');
            }else{
                alert(error.message);
            }
            console.log('user creation encounted an error', error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label="Email :"
                    type="email" 
                    onChange={handleChange} 
                    name ='email' 
                    value ={email} 
                    required/>

                <FormInput
                label ="Password :"
                    type="password" 
                    onChange={handleChange} 
                    name ='password' 
                    value={password} 
                    required/>

                <div className='buttons-container'>
                    <Button buttonType='inverted' type='Submit'>Sign In</Button>
                    <Button type='button' buttonType='google'onClick={SignInWithGoogle} >Google Sign In</Button>
                </div>

            </form>
        </div>
    );
}

export default SignInForm;