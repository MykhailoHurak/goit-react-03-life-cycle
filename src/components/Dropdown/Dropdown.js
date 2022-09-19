import React from 'react';
import css from './Dropdown.module.css';

class Dropdown extends React.Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState((x) => ({
            visible: !x.visible,
        }))
    }

    show = () => {
        this.setState({ visible: true });
    }

    hide = () => {
        this.setState({ visible: false });
    }

    render() {
        return (
            <div className={css.dropdown}>
                <h2 className={css.dropdown_title}>Dropdown</h2>
                <div className={css.dropdown_buttonBox}>
                    <button
                        className={css.dropdown_button}
                        type='button'
                        onClick={this.toggle}
                        onMouseOver={this.toggle}
                    >
                        {this.state.visible ? 'Hide' : 'Show' }
                    </button>
                    {/* <button className={css.dropdown_button} type='button' onClick={this.show}>Show</button> */}
                    {/* <button className={css.dropdown_button} type='button' onClick={this.hide}>Hide</button> */}
                </div>
                
                {this.state.visible && (<div className={css.dropdown_menu}>Dropdown Menu</div>)}
            </div>
        )
    }
}

export default Dropdown;