import { ButtonEvent } from "@rowComponents";

export default function DisconectBox() {
  return (
    <div className="disconnect">
      <p>Votre session a expiré, Veuillez vous reconnecter</p>
      <ButtonEvent>Accepter</ButtonEvent>
    </div>
  );
}
