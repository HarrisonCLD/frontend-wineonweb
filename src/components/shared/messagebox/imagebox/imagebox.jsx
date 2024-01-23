import { useState, useEffect } from "react";
import { ButtonEvent } from "@rowComponents";
// import { dataImage } from "../../api/apiData";

export default function ImageBox({ onClose, onClick }) {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const imageChecked = (image, index) => {
    setSelectedImage({});
    setSelectedImage({
      id: index,
      nom: image,
    });
  };

  // useEffect(() => {
  //   dataImage(setImages);
  // }, []);

  return (
    <div className="image_box">
      <h3>Sélectionner une image :</h3>
      <div className="closeView">
        <ButtonEvent onClick={onClose}>
          <div className="closeLine_1"></div>
          <div className="closeLine_2"></div>
        </ButtonEvent>
      </div>
      <div className="image_view">
        {images &&
          images.map((image, index) => (
            <div
              className="img_box"
              onClick={() => {
                imageChecked(image, index);
              }}>
              <input
                type="checkbox"
                checked={selectedImage && selectedImage.id === index}
              />
              <img
                className={
                  selectedImage && selectedImage.id === index
                    ? "img_active"
                    : null
                }
                key={index}
                src={`./src/images/${image}`}
                alt={`Image ${index}`}
              />
            </div>
          ))}
      </div>
      {selectedImage != null ? (
        <ButtonEvent
          name="submitImageAddProduit"
          children={"Ajouter l'image"}
          onClick={() => {
            onClick(selectedImage);
          }}
        />
      ) : null}
    </div>
  );
}
