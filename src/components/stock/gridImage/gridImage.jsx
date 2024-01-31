import { useEffect, useState } from "react";

import Popup from "@components/shared/popup/popup";

import { ButtonEvent, CloseButtonImageGrid } from "@components/shared/rowComponents";

import { get_images } from "@helpers/api/item.api.helper";

export default function GridImage({ stateForm, setStateForm, setState }) {
  const [data, setData] = useState([]);
  const [imgSelected, setImgSelected] = useState(null);

  useEffect(() => {
    get_images(setData);
  }, []);

  return (
    <>
      <div className="viewImage">
        <CloseButtonImageGrid close={setState} />
        {data.map((image, i) => (
          <div key={i} className={`imagecard ${imgSelected === image.image ? "selected" : ""}`} on onClick={() => setImgSelected(image.image)}>
            <img src={`../../src/assets/images/${image.image}`} alt="" />
          </div>
        ))}
      </div>
      {imgSelected && (
        <Popup message={"Voulez vous ajouter cette image ?"}>
          <ButtonEvent
            onClick={() => {
              setStateForm({ ...stateForm, image: imgSelected });
              setState(null);
              setImgSelected(null);
            }}
          >
            <p>Accepter</p>
          </ButtonEvent>
        </Popup>
      )}
    </>
  );
}
