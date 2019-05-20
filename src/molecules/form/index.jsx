import React, { Component } from 'react';
import s from './Form.module.css';
import Input from '../../atoms/input';
import Title from '../../atoms/title';

export default class Form extends Component {
  render(){
    return(
      <div className={s.formWrapper}>
        <Title
          name="Войдите в акаунт, чтобы продолжить"
          variant="small"
        />
        <form className={s.form}>
          <Input 
            type="email" 
            name="email" 
            placeholder="Email"
          />
          <Input 
            type="password" 
            name="psw" 
            placeholder="Пароль"
          />
          <button className={s.btn}>
            Войти
          </button>
        </form>
      </div>
    );
  }
}

