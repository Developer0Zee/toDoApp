import { useState } from "react";

function ToDoItem(props) {
  const [editText, setEditText] = useState(props.data);
  const [isEdit, setIsEdit] = useState(false);
  const [completed, setIsCompleted] = useState(false);

  function save() {
    props.onEdit(editText, props.index);
    setIsEdit(false);
  }

  function edit() {
    setIsEdit(true);
  }

  function deletes() {
    props.onDelete(props.index);
  }

  function markAsComplete() {
    setIsCompleted(true);
  }

  return (
    <li className={`task-item ${completed ? "completed" : ""}`}>
      {isEdit ? (
        <>
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button className="edit-btn" onClick={save}>Save</button>
        </>
      ) : (
        <>
          <span className="task-text">{props.data}</span>
          <div className="task-buttons">
            <button className="edit-btn" onClick={edit}>Edit</button>
            <button className="delete-btn" onClick={deletes}>Delete</button>
            <button className="complete-btn" onClick={markAsComplete}>Complete</button>
          </div>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
