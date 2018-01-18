import React from 'react';
import Modal from 'react-responsive-modal';
import axios from 'axios';

export default class BusinessInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      business: this.props.business,
      open: false,
      deal: true
    };

    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    this.searchForDeals();
  }

  onOpenModal() {
    this.setState({ open: true });
  };

  onCloseModal() {
    this.setState({ open: false });
  };

  searchForDeals() {
    let context = this;
    axios
    .get('/server/deal')
    .then(results => {
      console.log('results at client level', results);
      // context.setState({ deal: results });
    })
    .catch(err => {
      console.log('err at client level', err);
      // context.setState({ deal: false }))
    })
  }

  render() {
    return (
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
          {this.state.deal ?
            <button onClick={this.onOpenModal}>Deals available!</button> :
            null}
          <Modal open={this.state.open} onClose={this.onCloseModal} little>
            <h2>Simple centered modal</h2>
            <p>Some paragraph text about the deal.</p>
            <p>Should be some fine print stuff eventually.</p>
            <button onClick={() => window.open('https://www.google.com', '_blank')}>Click</button>
          </Modal>
        </div>
      </div>
    )
  }
}