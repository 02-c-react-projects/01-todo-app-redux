import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";


function NoteList() {
    const notes=useSelector(state => state.noteReducer.notes);
    const dispatch = useDispatch();

  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li key={index}>
            <span>{note.createdOn.toLocaleDateString()}</span>&nbsp;&nbsp;
            <span>{note.text}</span>&nbsp;&nbsp;
            <button onClick={() => {dispatch(deleteNote(index))}}>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
