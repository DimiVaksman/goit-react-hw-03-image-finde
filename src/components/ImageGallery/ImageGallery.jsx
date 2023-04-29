import PropTypes from 'prop-types';
import { Component } from 'react';
import { API } from '../services/API';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export class ImageGallery extends Component {
  // static PropTypes = {
  //   value: PropTypes.string.isRequired,
  // };

  state = {
    value: '',
    images: [],
    error: null,
    status: Status.IDLE,

    page: 1,

    totalPages: 0,
    isModal: false,
  };

  getFormProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ status: Status.PENDING });
      if (this.state.error) {
        this.setState({ error: null });
      }

      API.getPictures(nextValue, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images, error, status, page, totalPages } = this.state;

    if (status === 'idle') {
      return <div>find images</div>;
    }

    if (status === 'pending') {
      return <div> loading...</div>;
    }

    if (status === 'rejected') {
      return <div>error</div>;
    }

    if (images.length === 0) {
      return <div>Oops... </div>;
    }

    if (status === 'resolved') {
      return (
        <>
          <ul>
            {images.map(image => (
              <ImageGalleryItem key={image.id} item={image} />
            ))}
          </ul>
        </>
      );
    }
  }
}
