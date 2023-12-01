import {useState, useEffect} from 'react';
import './TaskList.css'; // Make sure to import the CSS file

export default function TaskList() {
  const [tasks, setTasks] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  // Load tasks initially.
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      setTasks([
        { id: 1, title: 'Open Task Tracker', completed: true },
        { id: 2, title: 'Play around', completed: false },
        { id: 3, title: 'Enjoy', completed: false },
      ]);
    }
  }, []);

  // Save changes on localStorage.
  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  // Handler to add a new task.
  const addNewTask = () => {
    // Ignore empty tasks.
    if (newTaskTitle.trim() === '') return;

    // Add the new task to the list.
    const newTask = {
      id: tasks.length + 1, // TODO Reimplement these IDs.
      title: newTaskTitle,
      completed: false,
    };
    setTasks([...tasks, newTask]);

    // Reset the input field after adding the task.
    setNewTaskTitle('');
  };

  // Handler to handle the input change.
  const handleInputChange = (event) => {
    setNewTaskTitle(event.target.value);
  };

  // Handler to handle pressing the Enter key in the input.
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addNewTask();
    }
  };

  const toggle = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    }));
  }

  const Task = ({ task }) => {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`} onClick={() => toggle(task.id)}>
        {task.title}
        <span className="status">{task.completed ? 'Done' : 'Pending'}</span>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks && <ul>
        {tasks.map((task, index) => (<li key={index}><Task task={task}/></li>))}
      </ul> || <marquee>Loading...</marquee>}
      <div className="task-input">
        <input
          type="text"
          value={newTaskTitle}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter new task"
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </div>
  );
}
