import Child from "./Child";

export default function Parent({ msg }) {
  return (
    <div style={{ padding: "20px", border: "2px solid black", marginTop: "20px" }}>
      <h2>Parent Component</h2>
      <Child receivedMsg={msg} />
    </div>
  );
}
