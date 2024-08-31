import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

function NoteForm() {
  const [NoteText, setNoteText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNote(NoteText))
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
