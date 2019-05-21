import React from 'react';
import s from './Links.module.css';
import { Link } from 'react-router-dom';

const Links = ({ children, to, ...props }) => (
  <Link
    className={s.link}
    to={to}
    {...props}
  >
    {children}
  </Link>
);

export default Links;