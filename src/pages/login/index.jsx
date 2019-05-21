import React, { Component } from 'react';
import s from './Login.module.css';
import Title from "../../atoms/title";
import LoginForm from '../../organisms/login-form';


export default class Login extends Component{
  render(){
    return(
      <div className={s.wrapper}>
        <Title name="Добро пожаловать!"/>
        <LoginForm />
      </div>
    );
  }
}