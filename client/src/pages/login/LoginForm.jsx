import { useState, useEffect } from "react";
import FormControl from "./FormControl";
import { BiHighlight } from 'react-icons/bi'
import Displaytext from "./displaytext";

//COMPONENT STARTS HERE
const LoginForm = () => {
    const initialState = {
        email_address: "",
        password: "",
        access_type: "admin",
    }
    const [profile, setProfile] = useState(initialState);

    const [ eventTargetName, setEventTargetName ] = useState('');
    const [ validator, setValidator] = useState({
        email_address: { valid:'', message: '' },
        password: { valid:'', message: '' },
        passwordConfirm: { valid:'', value:'', message: '' },
    });
    function handleChange(event) {
        setProfile({ ...profile, [event.target.name]: event.target.value });
        setEventTargetName(event.target.name)
    }
    function resetFields(e) {
        e.preventDefault();
        setProfile(initialState)
    }
    
    function rulesCheck() {
        if(eventTargetName === 'passwordConfirm') passwordMatchCheck();
        else if(eventTargetName === 'password') passwordLengthCheck();
        else if(eventTargetName === 'email_address') emailCheck();
    }
    function emailCheck() {
        const pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const valid = Boolean(profile.email_address.toLowerCase().match(pattern));

        console.log(valid);
        if(profile.email_address.length < 6) {
            return setValidator( validator => {
                validator.email_address.valid = false;
                validator.email_address.message = "Please enter at least 6 characters.";
                return { ...validator };
            }) 
        }
        if(valid){
            setValidator( validator => {
                validator.email_address.valid = true;
                validator.email_address.message = "";
                return { ...validator };
            }) 
        } else {
            setValidator( validator => {
                validator.email_address.valid = false;
                validator.email_address.message = "Email is invalid.";
                return { ...validator };
            }) 
        }
    }
    function passwordLengthCheck() {
        if (profile.password.length < 6) {
            setValidator( validator => {
                validator.password.valid = false;
                validator.password.message = "Please enter at least 6 characters.";
                return { ...validator };
            }) 
        } else {
            setValidator( validator => {
                validator.password.valid = true;
                validator.password.message = "";
                return { ...validator };
            }) 
        };
    }
   
    


    useEffect(() => {
        const checkDelay = setTimeout(() => rulesCheck(), 500);
        return () => clearTimeout(checkDelay);
    }, [validator.passwordConfirm.value, profile.password, profile.email_address]);

    return (
        <div className="p-3 m-3">
         <Displaytext /><br />
            <form autoComplete="off" className="m-auto rounded" >
                <FormControl 
                    label="Email Address"
                    type="email"
                    name="email_address"
                    length={6}
                    value={profile.email_address}
                    changeHandler={handleChange}
                    validator={validator.email_address}
                    placeholder={'JuanDelaCruz123@gmail.com'}
                    required
                />
                <FormControl 
                    label="Password"
                    type="password"
                    name="password"
                    minLength={6}
                    value={profile.password}
                    changeHandler={handleChange}
                    validator={validator.password}
                    placeholder={'*********.'}
                    required
                />
                <div className="d-flex">
                    <input type="submit" value="Log In"  className={`css-fw-600 border-0 py-2 css-rounded css-bg-primary text-light px-5  mx-auto css-btn`}
                     />                
                </div><br />
                <a href="#" className="pt-3">Forgot Password</a>
                <p>I don't have an Account? <a href="#">Sign Up</a></p>
            </form>
        </div>
    );
};

export default LoginForm;
