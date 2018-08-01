import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // stops from from submitting
    event.preventDefault();
    // Get text from input
    const storeName = this.myInput.value.value;
    // change the page to /store/input-text
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
