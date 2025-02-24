import { useState } from "react";
import Header from "./Header";
import CurrentDay from "./CurrentDay";
import Modal from "./Modal";
import Button from "./Button";
import Filters from "./Filters";
import ToDoItem from "./AddToDo";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null); 
  const [showCompleted, setShowCompleted] = useState(false);

  function addTask(title) {
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      title,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setIsOpen(false);
  }

  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function editTask(task) {
    setCurrentTask(task); 
    setIsOpen(true); 
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  const incompleteList = tasks.filter((task) => !task.completed);
  const completedList = tasks.filter((task) => task.completed);

  return (
    <div>
      <Header title="Ali's ToDo list" />
      <div className="main bg-white p-4 rounded-2xl shadow-lg">
        <div className="flex justify-between text-slate-700">
          <CurrentDay />
          <Filters showCompleted={showCompleted} setShowCompleted={setShowCompleted} />
        </div>

        <div>
          <ul className="text-slate-700 text-leading-7">
            {(showCompleted ? completedList : incompleteList).map((item) => (
              <ToDoItem
                key={item.id}
                title={item.title}
                completed={item.completed}
                onDelete={() => deleteTask(item.id)}
                completestatus={() => toggleTaskCompletion(item.id)}
                onEdit={() => editTask(item)} 
              />
            ))}
          </ul>
        </div>
      </div>

      <Modal
        onClose={() => setIsOpen(false)}
        open={isOpen}
        h1title={currentTask ? "Edit Task" : "New Task"}
        spanelem="Please Enter Task Title"
        savebutton={currentTask ? "Edit" : "Add"}
        saveTask={currentTask ? (title) => updateTask(currentTask.id, title) : addTask}
        currentTask={currentTask} 
      />
      <Button
        onClick={() => {
          setCurrentTask(null); 
          setIsOpen(true);
        }}
      >
        +
      </Button>
    </div>
  );

  function updateTask(id, title) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, title } : task
      )
    );
    setIsOpen(false); 
  }
}
