import PropTypes from 'prop-types';
export const ImageGalleryItem = ({ image, openModal }) => {
  return (
    <div>
      <li>
        <img
          src={image.webformatURL}
          alt={image.tags}
          onClick={() => openModal(image.largeImageURL)}
        />
      </li>
    </div>
  );
};
ImageGalleryItem.propTypes = {
  image: PropTypes.array,
  openModal: PropTypes.func,
};
