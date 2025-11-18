export default function Child({ receivedMsg }) {
  return (
    <div style={{ padding: "20px", border: "2px solid gray", marginTop: "20px" }}>
      <h3>Child Component</h3>
      <p>Message received: {receivedMsg}</p>
    </div>
  );
}
