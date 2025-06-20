import "./Task.css";
function Task(props) {
  let task = props.task;
  let deleteItem = props.deleteItem;
  return (
    <>
      <div className="row g-3 task">
        <div className="col">
          <p>{task.taskName}</p>
        </div>

        <div className="col">
          <p>{task.taskDate}</p>
        </div>

        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={(e) => deleteItem(task.taskName)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Task;
