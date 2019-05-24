import React from 'react';
import './register.css';

function Login() {
    return (
        <div className="login_bar">
            <form id="login">
                <input type="email" className="lform" name="email" placeholder="Enter your e-mail address" />
                <input type="password" className="lform" name="pass" placeholder="Enter your password" />
                <input type="submit" id="log" value="Login" />
            </form>
        </div>
    );
}

function Register() {
    return (
        <div className="registration_box">
            <div className="registration_box2">
                <h1>Registration</h1>
                <form id="registration">
                    <input type="text" className="form" name="first_name" placeholder="Enter your first name" required />
                    <input type="text" className="form" name="last_name" placeholder="Enter your last name" required />
                    <input type="email" className="form" name="email" placeholder="Enter your e-mail address" required />
                    <input type="number" className="form" name="mobile" placeholder="Enter your mobile phone number" />
                    <input type="password" className="form" name="pass" placeholder="Enter your password" required />
                    <input type="radio" name="user_type" /><span>Normal user</span>
                    <input type="radio" name="user_type" /><span>Farmer</span>
                    <input type="radio" name="user_type" /><span>Beekeeper</span>
                    <input type="submit" id="reg" value="Register" />
                </form>
            </div>
        </div>
    );
}

export {Login};
export default Register;