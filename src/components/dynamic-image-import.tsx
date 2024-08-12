import { useEffect, useState } from "react";

export const DynamicImageImport = () => {
  const [imageSource, setImageSource] = useState("");
  const [imageIndex, setImageIndex] = useState(1);

  useEffect(() => {
    const loadImage = async () => {
      const { default: imagePath } = await import(
        `../assets/${imageIndex}.jpg`
      );
      setImageSource(imagePath);
    };

    loadImage();
  }, [imageIndex]);

  return (
    <>
      <h2 className="mb-2">Dynamic Image Import</h2>

      {imageSource && (
        <img
          className="object-cover h-[300px] w-[400px] shadow"
          src={imageSource}
          alt="Dynamic Image"
        />
      )}

      <div className="mt-2 flex gap-2">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            if (imageIndex <= 4 && imageIndex >= 2) {
              setImageIndex((prevState) => prevState - 1);
            }
          }}
        >
          Previous Image
        </button>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => {
            if (imageIndex >= 1 && imageIndex < 4) {
              console.log(imageIndex);
              setImageIndex((prevState) => prevState + 1);
            }
          }}
        >
          Next Image
        </button>
      </div>

      <small className="mt-2">{imageIndex} / 4</small>
    </>
  );
};
