import { useNavigate } from "react-router-dom";

import { ButtonEvent } from "@components/shared/rowComponents";
import { navigateTo } from "@helpers/navigation.helper";
import { useDispatch } from "react-redux";
import { set_status } from "../../../../services/user.service";

export default function AlertBox({ message }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div className="alert">
      <div className="close-button"></div>
      <div className="message">{message}</div>
      <div className="button">
        <ButtonEvent
          name="accept"
          onClick={() => {
            dispatch(set_status(""));
            navigate("/");
          }}
          children={<p>Accepter</p>}
        />
      </div>
    </div>
  );
}
