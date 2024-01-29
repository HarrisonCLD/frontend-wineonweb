import { useNavigate } from "react-router-dom";

import { ButtonEvent } from "@components/shared/rowComponents";
import { navigateTo } from "@helpers/navigation.helper";

export default function AlertBox({ message }) {
  const navigate = useNavigate();
  return (
    <div className="alert">
      <div className="close-button"></div>
      <div className="message">{message}</div>
      <div className="button">
        <ButtonEvent name="accept" onClick={() => navigateTo(navigate, "/")} children={<p>Accepter</p>} />
      </div>
    </div>
  );
}
