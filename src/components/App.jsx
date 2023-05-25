import "../styles/App.css";
import Tasks from './Tasks';
import NewTaskPanel from './NewTaskPanel';
import {useTasks} from "../hooks/useTasks";

function App() {
  const {tasks, setTasks} = useTasks();

  return (
    <>
      <NewTaskPanel tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} setTasks={setTasks}/>
    </>
  );
}

export default App;
