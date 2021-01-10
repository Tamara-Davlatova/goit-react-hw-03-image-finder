import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = {
    imageTitle: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    this.setState({ imageTitle: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.imageTitle.trim() === '') {
      toast.error('Enter image title');
      return;
    }
    this.props.onSubmit(this.state.imageTitle);
    this.setState({ imageTitle: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <span className={s.button_label}>Search</span>
          </button>

          <input
            onChange={this.handleInputChange}
            className={s.input}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.imageTitle}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
