import IsLoading from "../loadingbox/loading";
import Success from "../successbox/successbox";
import AlertBox from "../errorbox/errorbox";

export default function AuthentificationBox(state) {
  console.log(state);
  return (
    <div className="waiting-auth">
      {state.state.status === "pending" && <IsLoading />}
      {state.state.status === "success" && <Success />}
    </div>
  );
}
