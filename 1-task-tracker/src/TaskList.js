import React, {useEffect} from 'react';
import './TaskList.css'; // Make sure to import the CSS file


export default function TaskList() {
  const [tasks, setTasks] = React.useState(null);

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

  useEffect(() => {
    if (tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

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
      <h2>Tasks</h2>
      {tasks && <ul>
        {tasks.map((task, index) => (<li key={index}><Task task={task}/></li>))}
      </ul> || <marquee>Loading...</marquee>}
    </div>
  );
}
