import React from 'react';
import css from './Number.module.css';

const Number = ({ number }) => (
    <span className={css.number}>{number}</span>
);

export default Number;