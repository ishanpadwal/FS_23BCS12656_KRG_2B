import Parent from "./parent";

export default function App() {
  const message = "Hello from App Component!";

  return (
    <div style={{ padding: "40px" }}>
      <h1>App Component</h1>
      <Parent msg={message} />
    </div>
  );
}
