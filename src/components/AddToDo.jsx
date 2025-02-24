import "../css/css.css";

function ToDoItem({ title, onDelete, completed, completestatus, onEdit }) {
  return (
    <div className="todo-item">
      <div className="rounded-lg p-3 max-w-full shadow-xl">
        <ul>
          <li className="flex items-center justify-between py-4 border-slate-950">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-3 w-4 h-4 text-blue-600 border-gray-300"
                checked={completed}
                onChange={completestatus}
              />

              <span className="text-gray-700 font-bold text-lg">{title}</span>
            </div>
            <div className="flex space-x-3">
              <button
                className="text-red-400 hover:text-red-600 shadow-lg rounded-lg"
                onClick={onDelete}
              >
                delete
              </button>
              <button
                className="text-blue-400 shadow-lg hover:text-blue-600"
                onClick={onEdit}
              >
                edit
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ToDoItem;
