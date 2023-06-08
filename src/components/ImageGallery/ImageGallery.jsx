import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, openModal }) => {
  return (
    <div>
      <ul>
        {images.map((image, i) => (
          <ImageGalleryItem
            key={image.id}
            image={image}
            openModal={openModal}
          />
        ))}
      </ul>
    </div>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  openModal: PropTypes.func,
};
