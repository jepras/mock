import React from 'react';
import ModalVideo from 'react-modal-video';

export default class VideoModal extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  render() {
    return (
      <div>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="MCkTebktHVc"
          onClose={() => this.setState({ isOpen: false })}
        />
        {/* <button onClick={this.openModal}>Open</button> */}
      </div>
    );
  }
}
