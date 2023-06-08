import PropTypes from 'prop-types';
import { Component } from 'react';

export class Modal extends Component {
  handelClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose('');
    }
  };
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose('');
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.
  componentWillMount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div
        onClick={this.handelClick}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img src={this.props.largeImageURL} alt={'name'} />
      </div>
    );
  }
}
Modal.propTypes = {};
