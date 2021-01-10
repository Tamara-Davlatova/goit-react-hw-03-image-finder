import { Component } from 'react';
import Searchbar from './Components/Searchbar/Searchbar';
import ImageInfo from './Components/ImageInfo/ImageInfo';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    imageTitle: '',
  };

  handleSearhSubmit = imageTitle => {
    this.setState({ imageTitle });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearhSubmit} />
        <ImageInfo imageTitle={this.state.imageTitle} />
        <ToastContainer />
      </>
    );
  }
}
