import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

function Slider({ url, limit, page }) {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(imagesUrl) {
    try {
      setLoading(true);

      const response = await fetch(`${imagesUrl}?page=${page}&limit=${limit}`);
      const imagesResult = await response.json();

      if (imagesResult) {
        setImages(imagesResult);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      setErrorMessage(e.message);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  console.log(images);

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  if (loading) {
    return <div>Please wait a moment...</div>;
  }

  if (errorMessage !== null) {
    return <div>An error occurred! Please try again later</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((singleImage, index) => (
            <img
              key={singleImage.id}
              alt={singleImage.author}
              src={singleImage.download_url}
              className={
                currentImage === index
                  ? "singleImage"
                  : "singleImage inactive-singleImage"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="imageCircles">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentImage(index)}
                className={
                  currentImage === index
                    ? "currentImageCircle"
                    : "currentImageCircle inactive-circle"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default Slider;
