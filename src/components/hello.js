import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>Bonjour {this.props.name}!</div>;
  }
}

export default Hello;
