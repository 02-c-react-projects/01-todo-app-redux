import { useState } from "react";

function NoteForm({ onCreateNote }) {
  const [NoteText, setNoteText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateNote(NoteText);
    setNoteText("");
  };

  return (
    <div>
      
    <form onSubmit={handleSubmit}>
      <textarea
        type="text"
        value={NoteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <button type="submit">Create Note</button>
    </form>
    </div>
  );
}

export default NoteForm;
