"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css"; // Quill theme styles

// Dynamically import ReactQuill so it only loads on client
// const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function Editor() {
  const [value, setValue] = useState("");

  return (
    <div>
      {/* <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        placeholder="Start writing..."
      /> */}
      <p className="mt-4">Editor content (HTML):</p>
      <pre>{value}</pre>
    </div>
  );
}