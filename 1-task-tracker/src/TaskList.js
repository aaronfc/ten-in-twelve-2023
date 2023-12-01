import React from 'react';
import './TaskList.css'; // Make sure to import the CSS file

const tasks = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: true },
  { id: 3, title: 'Task 3', completed: false },
  // You can add more tasks here...
];

export default function TaskList() {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
            <span className="status">{task.completed ? 'Done' : 'Pending'}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
