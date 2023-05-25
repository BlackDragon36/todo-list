import React from 'react';
import redCross from "../assets/redX.webp";

function Task({text, color, idx, tasks, setTasks}) {

  function removeTodo(e) {
    const newTasks = tasks.filter((task, index) => index !== idx);
  setTasks(newTasks);
  }

  return (
    <div className={`task ${color}BorderBottom`}>
      <h3>{text}</h3>
      <button className="removeTodo" onClick={removeTodo}><img src={redCross} alt="redCorss" height={20}/></button>
    </div>
  )
}

export default Task;