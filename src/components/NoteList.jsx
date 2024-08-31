

function NoteList() {
    const notes=[
      {text:'first note',createdOn:new Date()},
      {text:'second note',createdOn:new Date()},

    ];
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
