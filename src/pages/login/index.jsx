import React, { Component } from 'react';
import s from './Login.module.css';
import Title from "../../atoms/title";
import Form from '../../molecules/form';


export default class Login extends Component{
  render(){
    return(
      <div className={s.wrapper}>
        <Title name="Добро пожаловать!"/>
        <Form />
      </div>
    );
  }
}