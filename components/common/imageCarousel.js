import React from "react";
import ImageGallery from "react-image-gallery";

const ImageCarousel = ({ items }) => {
  return (
    <ImageGallery
      items={items}
      showPlayButton={false}
      showFullscreenButton={false}
    />
  );
};

export default ImageCarousel;
