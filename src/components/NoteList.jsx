

function NoteList() {
    const notes=[];
  return (
    <div className="container">
    <ul>
      {notes.map((note,index) => (
        <li>
            <p>{note.createdOn.toLocaleDateString()}</p>
            <p>{note.text}</p>
            <button>Delete</button>
            </li>
      ))}
    </ul>
    </div>
  );
}

export default NoteList;
