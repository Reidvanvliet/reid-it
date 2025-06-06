import { useEffect } from "react";

const PostMedia = ({ postMedia }) => {
  if (Array.isArray(postMedia)) {
    return (
      <div className="slideshow-container">
        <button className='prev'>&#10094;</button>
        <img className="post-image-slideshow" src={postMedia[0]} />
        <button className="next">&#10095;</button>
      </div>
    );
  } else if (postMedia) {
    return <img className="post-image" src={postMedia} />;
  } else {
    return;
  }
};

export default PostMedia;
