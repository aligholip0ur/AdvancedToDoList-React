import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function Modal({
  open,
  onClose,
  saveTask,
  h1title,
  spanelem,
  savebutton,
  currentTask,
}) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (currentTask) {
      setTitle(currentTask.title);
    } else {
      setTitle("");
    }
  }, [currentTask]);

  function handleAdd(e) {
    e.preventDefault();
    if (title === "") return;
    saveTask(title);
    setTitle(""); 
  }

  function handleClose() {
    setTitle("");
    onClose();
  }

  return (
    <>
      {open && (
        <div className="bg-black/20 fixed inset-0 flex justify-center items-start md:items-center">
          <div className="bg-white w-full max-w-xl p-4 m-4 rounded-2xl shadow-md">
            <h1 className="font-bold text-xl text-slate-700">{h1title}</h1>
            <span className="block mt-2 text-slate-400">{spanelem}</span>
            <form onSubmit={handleAdd} className="mt-3">
              <label htmlFor="taskTitle" className="sr-only">
                Task Title
              </label>
              <input
                id="taskTitle"
                required
                autoFocus
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-b-2 border-slate-300 px-2 py-2.5 w-full outline-none focus:border-b-[3px] focus:ring-0 focus:border-[#609fff] transition-colors duration-300"
                type="text"
                placeholder="Do something..."
                name="taskTitle"
              />
              <div className="flex gap-x-4 justify-end items-center mt-3">
                <button onClick={handleClose} className="text-slate-500 font-bold" type="button">
                  Cancel
                </button>
                <button type="submit" className="text-[#609fff] font-bold">
                  {savebutton}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
  h1title: PropTypes.string.isRequired,
  spanelem: PropTypes.string.isRequired,
  savebutton: PropTypes.string.isRequired,
  currentTask: PropTypes.object,
};
