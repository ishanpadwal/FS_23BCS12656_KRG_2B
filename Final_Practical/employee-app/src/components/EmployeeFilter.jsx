import { useState } from "react";

export default function App() {
  const [names, setNames] = useState([
    "Ishan Padwal",
    "Priyanshu Choudhary",
    "Rohit thakur",
    "Sanampreet singh",
    "Shashwat",
    "Sambhav",
  ]);

  const [search, setSearch] = useState("");

  const filtered = names.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ fontSize: "50px" }}>Employee List</h1>

      <input
        type="text"
        placeholder="Search employees..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "12px",
          width: "400px",
          marginBottom: "20px",
          borderRadius: "10px",
          border: "2px solid white",
          background: "#333",
          color: "white",
        }}
      />

      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {filtered.map((name, i) => (
          <li
            key={i}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "10px",
              color: "black",
              fontSize: "20px",
            }}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

