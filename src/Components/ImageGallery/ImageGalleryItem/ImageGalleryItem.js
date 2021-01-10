import { Component } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../../Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };
  render() {
    const { id, galeryImage, alt, modalImg } = this.props;
    const { showModal } = this.state;
    return (
      <li key={id} className={s.Item}>
        <img
          src={galeryImage}
          alt={alt}
          className={s.Image}
          onClick={this.toggleModal}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={modalImg} alt={alt} />
        )}
      </li>
    );
  }
}
