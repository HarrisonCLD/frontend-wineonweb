import { useState } from "react";
import IsLoading from "../loadingbox/loading";
import Success from "../successbox/successbox";

export default function AuthentificationBox({ setStatus }) {
  return (
    <div className="waiting-auth">
      {setStatus === "pending" && <IsLoading />}
      {setStatus === "success" && <Success />}
    </div>
  );
}
