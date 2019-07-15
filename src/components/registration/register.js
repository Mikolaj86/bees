import React, { Component } from 'react';
import './register.css';
import Select from "../Select";
import Input from "../Input";
import Axios from 'axios';


class RegisterUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newUser: {
                username: '',
                name: '',
                surname: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                typeOfUser: '',
            },
            typeOfUserOptions: ["Zwykły użytkownik", "Pszczelarz", "Rolnik"],
        }
    }


    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState( prevState => {
                return {
                    newUser : {
                        ...prevState.newUser, [name]: value
                    }
                }
            }, () => console.log(this.state.newUser)
        )
    }

    addUser = async (event) => {
        event.preventDefault();
        let newUser = {
            username: this.state.newUser.username,
            first_name: this.state.newUser.name,
            last_name: this.state.newUser.surname,
            email: this.state.newUser.email,
            telephone: this.state.newUser.phone,
            password: this.state.newUser.password,
            password2: this.state.newUser.confirmPassword,
            role: this.state.newUser.typeOfUser
        }
        const {user} = await Axios.post('http://127.0.0.1:8000/register/', newUser)
    }




     render() {
        return (
            <div className="registration_box">
                <div className="registration_box2">
                    <h1>Registration</h1>
                    <form id="registration">
                        {/*<input type="text" className="form" name="first_name" placeholder="Enter your first name"*/}
                        {/*       required/>*/}
                        {/*<input type="text" className="form" name="last_name" placeholder="Enter your last name"*/}
                        {/*       required/>*/}
                        {/*<input type="email" className="form" name="email" placeholder="Enter your e-mail address"*/}
                        {/*       required/>*/}
                        {/*<input type="number" className="form" name="mobile"*/}
                        {/*       placeholder="Enter your mobile phone number"/>*/}
                        {/*<input type="password" className="form" name="pass" placeholder="Enter your password" required />*/}
                        <Input type={'text'}
                               title= {'Użytkownik'}
                               name= {'username'}
                               value={this.state.newUser.username}
                               placeholder = {'Wpisz nazwę użytkownika'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'text'}
                               title= {'Imię'}
                               name= {'name'}
                               value={this.state.newUser.name}
                               placeholder = {'Wpisz swoje Imię'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'text'}
                               title= {'Nazwisko'}
                               name= {'surname'}
                               value={this.state.newUser.surname}
                               placeholder = {'Wpisz swoje Nazwisko'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'e-mail'}
                               title= {'Email'}
                               name= {'email'}
                               value={this.state.newUser.email}
                               placeholder = {'Podaj swój adres e-mail'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'number'}
                               title= {'Mobile'}
                               name= {'phone'}
                               value={this.state.newUser.phone}
                               placeholder = {'Podaj swój numer telefonu'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'password'}
                               title= {'Password'}
                               name= {'password'}
                               value={this.state.newUser.password}
                               placeholder = {'podaj hasło'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Input type={'password'}
                               title= {'Password2'}
                               name= {'confirmPassword'}
                               value={this.state.newUser.confirmPassword}
                               placeholder = {'powtórz hasło'}
                               handleChange = {this.handleInput}
                               className="form"
                        />
                        <Select title={"Type of user"} className="form" name={"typeOfUser"} options={this.state.typeOfUserOptions}
                                value={this.state.newUser.typeOfUser} placeholder={"Wybierz typ użytkownika"} handleChange={this.handleInput} className="form" />
                        <input onClick={this.addUser} type="submit" id="reg" value="Register"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default RegisterUser;