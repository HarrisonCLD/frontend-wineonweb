export default function Popup({ message, children }) {
  return (
    <div className="popup">
      <p>{message}</p>
      {children}
    </div>
  );
}
