import React from 'react';
import Modal from 'react-responsive-modal';

export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal () {
    this.setState({ open: true });
  };

  onCloseModal () {
    this.setState({ open: false });
  };

  render () {
    <div>
      <div className="businessInfo">
        <div className="businessTitle">{this.props.business.name}</div>
        <div className="rating">
          
        </div>
        <div>{this.props.business.formatted_address}</div>
        <div>{this.props.business.formatted_phone_number}</div>
        <a href={this.props.business.website} >{this.props.business.website}</a>
      </div>
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={this.state.open} onClose={this.onCloseModal} little>
            <h2>Simple centered modal</h2>
          </Modal>
      </div> 
    </div>
  }
}