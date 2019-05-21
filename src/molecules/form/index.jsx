import React from 'react';
import s from './Form.module.css';
import Title from '../../atoms/title';

const Form = ({ title, children, ...props }) => {
  return(
    <div className={s.formWrapper}>
      <Title
        name={title}
        variant="small"
      />
      <form 
        className={s.form}
        {...props}
      >
        {children}
      </form>
    </div>
  );
}

export default Form;

