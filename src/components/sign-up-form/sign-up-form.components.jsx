import {useState,useContext} from 'react';
import {createAuthUserWithEmailAndPassword,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component'
import './sign-up-form.styles.scss'

import { userContext } from '../../contexts/user.context';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields;
    
    const {setCurrentUser} = useContext(userContext);

    const resetFormFields =()=>{
        setFormFields(defaultFormFields);
    }

    const handleSubmit =async (event)=>{
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('password does not match confirm password');
            return ;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email,password);
            
            await createUserDocumentFromAuth(user,{displayName});
            // console.log({user});
            setCurrentUser(user);

            resetFormFields();
        } catch (error) {
            console.log('user creation encounted an error', error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return(
        <div className='sign-up-container'>
            <h2>Dont have an account?</h2>
            <span>Sign up with email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput 
                    label="Display Name :"
                    type="text"
                    onChange={handleChange} 
                    name = 'displayName' 
                    value={displayName} 
                    required/>

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

                <FormInput
                    label= "Confirm Password :"
                    type="password" 
                    onChange={handleChange} 
                    name ='confirmPassword' 
                    value={confirmPassword} 
                    required/>

                <Button type='Submit'>Sign Up</Button>
            </form>
        </div>
    );
}

export default SignUpForm;