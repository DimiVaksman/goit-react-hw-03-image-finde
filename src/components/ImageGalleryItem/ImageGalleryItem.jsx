export const ImageGalleryItem = ({ item }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <li
      onClick={e => {
        e.preventDefault();
      }}
    >
      <div>
        <img src={webformatURL} alt={tags} loading="lazy" />
      </div>
    </li>
  );
};
