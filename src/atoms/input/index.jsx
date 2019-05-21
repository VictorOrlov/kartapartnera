import React from 'react';
import s from './Input.module.css';

const Input = ({...props}) => (
  <input 
    className={s.input}
    {...props}
  />
);

export default Input;