import IsLoading from "../loadingbox/loading";
import Success from "../successbox/successbox";

export default function AuthentificationBox(state) {
  console.log(state.status);
  return (
    <div className="waiting-auth">
      {state.state.status === "pending" && <IsLoading />}
      {state.state.status === "success" && <Success />}
    </div>
  );
}
