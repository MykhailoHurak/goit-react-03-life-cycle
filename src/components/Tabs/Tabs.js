import React, { PureComponent } from 'react';
import './Tabs.css';

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

    // В PureComponent вже реалізований метод shouldComponentUpdate - іде порівняння всі х пропсів на першому рівні
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextState.activeTabIdx !== this.state.activeTabIdx;
    // }
    
  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log(`Re-render @ ${Date.now()}`);

    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <div className='TabsBox'>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
                  onClick={() => this.setActiveTabIdx(idx)}
                  className='Tab__Button'
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}