// import 'node_modules/modern-normalize/modern-normalize.css';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Seachbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    query: '',

  };
  handleFormSubmit = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Seachbar onSubmit={this.handleFormSubmit} />
        <ImageGallery value={this.state.query}  />
      </div>
    );
  }
}
