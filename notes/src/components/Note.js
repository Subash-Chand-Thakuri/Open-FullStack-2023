const Note = ({ key,note,toggleImportance }) => {
  const label = note.important
  ? 'make not important' : 'make important'

    return (
      <li className="note" key={key} >
        {note.content}
        <button onClick={toggleImportance}>{label}</button>
        </li>
    )
  }

  export default Note;