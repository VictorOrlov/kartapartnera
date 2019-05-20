import React from 'react';
import s from './Title.module.css';

 const Title = ({ name, variant }) => {
  let variantStyle = () => {
    if(variant === 'small'){
      return s.titleSmall;
    }
    else {return s.titleStandart}
  }
  return (
  <div className={variantStyle()}>
    <span>{name}</span>
  </div>
  );
 }

 export default Title;