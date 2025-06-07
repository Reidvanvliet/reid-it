import { useEffect, useState } from "react";

const PostMedia = ({ postMedia }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % postMedia.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? postMedia.length - 1 : prevIndex - 1
    );
  };

  if (Array.isArray(postMedia)) {
    return (
      <div className="slideshow-container">
        <div className="slideshow-image">
          <img className="post-image" src={postMedia[currentIndex]} />
        </div>

        <button className="prev" onClick={() => nextSlide()}>
          &#10094;
        </button>
        <button className="next" onClick={() => prevSlide()}>
          &#10095;
        </button>
      </div>
    );
  } else if (postMedia) {
    return <img className="post-image" src={postMedia} />;
  } else {
    return;
  }
};

export default PostMedia;
