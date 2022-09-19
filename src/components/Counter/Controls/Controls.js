import React from "react";
import css from './Controls.module.css';

const Controls = ({ onIncrement, onDecrement }) => (
    <div className={css.controls}>
        <button className={css.button}
            type="button"
            onClick={onIncrement}
        >
            Increment by 1
        </button>
        <button className={css.button}
            type="button"
            onClick={onDecrement}
        >
            Decrement by 1
        </button>
    </div>
);

export default Controls;