import "../styles/App.css";
import Tasks from './Tasks';
import NewTaskPanel from './NewTaskPanel';
import {useTasks} from "../hooks/useTasks";

function App() {
  const {tasks, setTasks, addTask} = useTasks();

  return (
    <>
      <NewTaskPanel addTask={addTask}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  );
}

export default App;
