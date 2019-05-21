import React, { Component } from 'react';
import Form from '../../molecules/form';
import Input from '../../atoms/input';
import Button from '../../atoms/button';

export default class LoginForm extends Component {
  render(){
    return(
      <Form
        title="Войдите в акаунт, чтобы продолжить"
      >
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
        <Button 
          variant="third"
        >
          Войти
        </Button>
      </Form>
    );
  }
}