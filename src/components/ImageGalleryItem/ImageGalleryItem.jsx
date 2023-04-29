import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ item, onImgClick }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <li
      onClick={e => {
        e.preventDefault();
        onImgClick({ largeImageURL, tags });
      }}
    >
      <div>
        <img src={webformatURL} alt={tags} width="320" loading="lazy" />
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
