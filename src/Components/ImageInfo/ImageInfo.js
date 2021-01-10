import { Component } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import fetchImage from '../../servises/Image-api';
import Loaders from '../Loader/Loader';
import Error from '../Error/Error';

export default class ImageInfo extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImage = prevProps.imageTitle;
    const nextImage = this.props.imageTitle;

    if (prevImage !== nextImage) {
      this.setState({ images: [], page: 1, error: null });
    }
    if (prevProps.imageTitle !== this.props.imageTitle) {
      this.fetchImage();
    }
  }

  fetchImage = () => {
    this.setState({ status: 'pending' });
    fetchImage(this.props.imageTitle, this.state.page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          page: prevState.page + 1,
          status: 'resolved',
        })),
      )

      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  render() {
    const { status, error, images } = this.state;

    if (status === 'idle') {
      return <h1 style={{ textAlign: 'center' }}>Enter image title</h1>;
    }
    if (status === 'pending') {
      return <Loaders />;
    }
    if (status === 'rejected') {
      <Error message={error.message} />;
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onLoadMore={this.fetchImage} />
        </>
      );
    }
  }
}
