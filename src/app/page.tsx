"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <main className="p-24">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded border border-black px-2 hover:rounded"
      />
      <p>Name: {name}</p>
    </main>
  );
}
