import ToDoItem from "./ToDoItem";

function ToDoList(props) {
  return (
    <ul>
      {props.data.map((item, index) => (
        <ToDoItem
          key={index}
          index={index}
          data={item}
          onEdit={props.onEdit}
          onDelete={props.onDelete}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
