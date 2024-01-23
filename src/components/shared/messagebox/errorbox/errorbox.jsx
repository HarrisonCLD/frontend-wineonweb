import { ButtonEvent } from "@components/shared/rowComponents";

export default function AlertBox({ action, message }) {
  return (
    <div className="alert">
      <div className="close-button"></div>
      <div className="message">{message}</div>
      <div className="button">
        <ButtonEvent name="accept" onClick={() => action} children={<p>Accepter</p>} />
      </div>
    </div>
  );
}
