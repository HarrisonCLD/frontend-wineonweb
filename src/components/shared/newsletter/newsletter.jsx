import { InputForm, ButtonEvent } from "@rowComponents";
import { useState } from "react";

export default function Newsletter() {
  const [newsletter, setNewsletter] = useState({});

  return (
    <div className="newsletter">
      <p>
        Pour être au courrant de nos dernières offres, <br />
        <span>Inscrivez-vous à notre NewsLetter</span>
      </p>
      <InputForm name="email" setState={setNewsletter} state={newsletter} placeholder="Email" />
      <ButtonEvent>S'inscrire</ButtonEvent>
    </div>
  );
}
