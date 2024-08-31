import { useSelector } from "react-redux";


function NoteList() {
    const notes=useSelector(state => state.noteReducer.notes);
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <span>{note.createdOn.toLocaleDateString()}</span>&nbsp;&nbsp;
            <span>{note.text}</span>&nbsp;&nbsp;
            <button>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
