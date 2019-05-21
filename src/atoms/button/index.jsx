import React from 'react';
import s from './Button.module.css';

const Button = ({ variant, idName, children, ...props }) => {
  const buttonVariant = () => {
    switch(variant) {
      case 'main':
        return s.mainButton;
      case 'second':
        return s.secondButton;
      case 'third':
        return s.thirdButton;
      case 'alarm':
        return s.alarmButton;
      case 'disable':
      default:
        return s.disableButton;
    }
  }
  console.log(variant);
  return(
    <button
      className={buttonVariant()}
      id={idName}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;