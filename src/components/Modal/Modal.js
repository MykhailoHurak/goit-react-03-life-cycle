import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const rootModal = document.querySelector('#root-modal');

export default class Modal extends Component {
  
    componentDidMount() {
        console.log('Modal componentDidMount');
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentWillUnmount() {
        console.log('Modal componentWillUnmount');
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = event => {
        //   console.log(event.code);
        if (event.code === 'Escape') {
            console.log('Натиснули ESC, потрібно закрити Модалку');
            this.props.onCloseModal();
        }
    }

    handleClickBackdrop = event => {
        console.log('Клікнули в Бекдроп');
        console.log('event.target', event.target);
        console.log('event.currentTarget', event.currentTarget);

        if (event.currentTarget === event.target) {
            this.props.onCloseModal();
        }
    }

  render() {
      return createPortal(
          <div className="Modal__backdrop" onClick={this.handleClickBackdrop}>
              <div className="Modal__content"> {this.props.children} </div>
          </div>,
          rootModal,
      );
  }
}