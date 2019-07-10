import React from 'react';
// import './register.css';

export function Login() {
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