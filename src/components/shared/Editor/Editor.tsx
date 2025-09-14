"use client";

import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./Editor.scss";

export default function Editor() {
  const [value, setValue] = useState("");
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌍</p>",
    immediatelyRender: false,
    autofocus: true,
  });

  if (!editor) return null;

  return (
    <EditorContent editor={editor} className="hbup-richtext-editor" />
  );
}