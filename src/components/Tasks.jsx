import React from 'react';
import Task from './Task';

function Tasks({tasks, setTasks}) {

  return (
    <div className="tasksPanel">
      <h1>Tasks: </h1>
      {tasks.map((task, idx) => {
        return (
          <Task key={idx} text={task.text} color={task.color} idx={idx} tasks={tasks} setTasks={setTasks}/>
        )
      })}
    </div>
  )
}

export default Tasks