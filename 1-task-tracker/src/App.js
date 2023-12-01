import './App.css';
import TaskList from "./TaskList";

function App() {
  return (
    <div className="App">
      <h2>
        <img src={"logo512.png"} alt="Task Tracker logo" width={32} height={32}/>
        Task Tracker
      </h2>
      <TaskList />
    </div>
  );
}

export default App;
