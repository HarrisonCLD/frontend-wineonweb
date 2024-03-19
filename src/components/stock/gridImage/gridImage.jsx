import { useEffect, useState } from "react";

import Popup from "@components/shared/popup/popup";

import { ButtonEvent, CloseButtonImageGrid } from "@components/shared/rowComponents";

import { get_images } from "@helpers/api/dataform.api.helper";

export default function GridImage({ data, stateForm, setStateForm, setState }) {
  const [imgSelected, setImgSelected] = useState(null);

  return (
    <>
      <div className="viewImage">
        <CloseButtonImageGrid close={setState} />
        {data.map((image, i) => (
          <div key={i} className={`imagecard ${imgSelected === image ? "selected" : ""}`} onClick={() => setImgSelected(image)}>
            <img src={`../../src/assets/images/${image}.png`} alt="" />
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
