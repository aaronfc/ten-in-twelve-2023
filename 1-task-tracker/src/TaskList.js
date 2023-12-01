import React, {useEffect} from 'react';
import './TaskList.css'; // Make sure to import the CSS file


export default function TaskList() {
  const [tasks, setTasks] = React.useState(null);

  useEffect(() => {
    // TODO Fetch tasks from the API.
    setTimeout(() => {
      setTasks([
        { id: 1, title: 'Task 1', completed: false },
        { id: 2, title: 'Task 2', completed: true },
        { id: 3, title: 'Task 3', completed: false },
        // You can add more tasks here...
      ]);
    }, Math.random() * 3000); // Simulate up to 3 seconds of delay.
  }, []);

  const Task = ({ task }) => {
    return (
      <div className={`task ${task.completed ? 'completed' : ''}`}>
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
