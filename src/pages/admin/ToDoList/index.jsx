import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./components/Item";

function ToDoListPage() {
  const getTask = useSelector((state) => state.toDoListReducer.taskList);
  const dispatch = useDispatch();
  const [addTaskForm, setAddTaskForm] = useState({
    title: "",
    description: "",
  });

  function handleAddTask() {
    dispatch({
      type: "CREATE_TASK",
      payload: addTaskForm,
    });
    setAddTaskForm({
      title: "",
      description: "",
    });
  }

  useEffect(() => {
    // console.log(getTask);
  }, [getTask]);

  function handleChangeValue(e) {
    const { name, value } = e.target;
    setAddTaskForm({
      ...addTaskForm,
      [name]: value,
    });
  }

  function handleEditTask(values, index) {
    dispatch({
      type: "EDIT_TASK",
      payload: {values,index},
    });
  }

  function handleDeleteTask(index) {
    dispatch({
      type: "DELETE_TASK",
      payload: index,
    });
  }

  function renderTaskList() {
    return getTask.map((taskItem, taskIndex) => {
      return (
        <Item
          key={`${taskIndex}-${taskItem.title}`}
          index={taskIndex}
          title={taskItem.title}
          description={taskItem.description}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      );
    });
  }

  return (
    <div style={{ width: 500, margin: "24px auto" }}>
      <h2>TO DO LIST APP</h2>
      <div
        style={{
          padding: "20px",
          border: "2px solid",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3>Add card</h3>

        <label>Title:</label>
        <input
          type="text"
          name="title"
          onChange={(e) => handleChangeValue(e)}
          value={addTaskForm.title}
        ></input>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => handleChangeValue(e)}
          value={addTaskForm.description}
        ></input>
        <button onClick={() => handleAddTask()} style={{ marginTop: "20px" }}>
          Add Task
        </button>
      </div>
      {renderTaskList()}
    </div>
  );
}

export default ToDoListPage;

