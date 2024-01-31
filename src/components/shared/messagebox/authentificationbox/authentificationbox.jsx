import { useState } from "react";
import IsLoading from "../loadingbox/loading";
import Success from "../successbox/successbox";
import AlertBox from "../errorbox/errorbox";

export default function AuthentificationBox({ setStatus }) {
  return (
    <div className="waiting-auth">
      {setStatus === "pending" && <IsLoading />}
      {setStatus === "success" && <Success />}
      {setStatus === "error" && <AlertBox message={"Erreur lors de l'authentification, veuillez réessayer plus tard."} />}
    </div>
  );
}
