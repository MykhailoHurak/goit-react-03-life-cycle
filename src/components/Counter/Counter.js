import React from "react";

import css from './Counter.module.css';

import Controls from './Controls/Controls';
import Number from './Number/Number';

class Counter extends React.Component {
    static defaultProps = {
        initialValue: 0,
    };

    static propTypes = {
        //
    };

    // constructor() {
    //     super();
    //     this.state = { value: 0, };
    // }

    state = {
        // value: 0,
        value: this.props.initialValue,
    };

    // handleIncrement = () => {
    //     // this.setState({ value: 10, });
    //     // event доступний тільки в синхронному коді, після зняття зі стеку одразу очищається
    //     // для використання event в асинхронному коді треба зберегти його властивість до змінної
    //     // console.log('Клікнули на Збільшити');
    //     // console.log(this);
    //     // console.log(event.target);
    //     // const target = event.target;
    //     // setTimeout(() => {console.log(target);}, 1000);
    // }

    handleIncrement = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
    };

    // handleDecrement = (event) => {
    //     console.log('Клікнули на Зменшити');
    //     console.log(this);
    //     console.log(event.type);
    // }

    handleDecrement = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
    };


    render() {
        return (
            <>
                <div className={css.counter}>
                    <h2 className={css.counter_title}>Counter</h2>
                    <Number
                        number={this.state.value}
                    />
                    {/* <span>{this.state.value}</span> */}

                    <Controls
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                    />
                    {/* <div>
                    <button
                        type="button"
                        onClick={this.handleIncrement}
                    >
                        Increment by 1
                    </button>
                    <button
                        type="button"
                        onClick={this.handleDecrement}
                    >
                        Decrement by 1
                    </button>
                    </div> */}
                </div>
            </>
        )
    }
}

// const Counter = () => (
//     <div>
//         <span>0</span>

//         <div>
//             <button type="button">Increment by 1</button>
//             <button type="button">Decrement by 1</button>
//         </div>
//     </div>
// );

export default Counter;

// =========================================================================
// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class Counter extends Component {
//   static defaultProps = {
//     step: 1,
//   };

//   render() {
//     const { step } = this.props;

//     return (
//       <div>
//         <span>0</span>
//         <button type="button">Increment by {step}</button>
//         <button type="button">Decrement by {step}</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter step={5} />, document.getElementById("root"));