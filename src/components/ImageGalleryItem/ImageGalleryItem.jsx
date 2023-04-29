export const ImageGalleryItem = ({ item }) => {
  const { tags, webformatURL } = item;

  return (
    <li
      onClick={e => {
        e.preventDefault();

      }}
    >
      <div>
        <img src={webformatURL} alt={tags} width='320'  loading="lazy" />
      </div>
    </li>
  );
};
