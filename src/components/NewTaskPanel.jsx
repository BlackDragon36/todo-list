import React from 'react';
import {useTaskText} from "../hooks/useTaskText";
import {useColoredBtns} from "../hooks/useColoredBtns";
import {useSelectedColor} from "../hooks/useSelectedColor";


function NewTaskPanel({addTask}) {

  const {taskText, setTaskText} = useTaskText();
  const {coralBtn, limeBtn, cyanBtn, yellowBtn} = useColoredBtns();
  const {selectedColor, setSelectedColor} = useSelectedColor();
  const colors = [coralBtn, limeBtn, cyanBtn, yellowBtn];

  function selectColor(e) {
    colors.forEach(color => {
      color.current.classList.remove("selected");
    });
    e.target.classList.add("selected");
  }

  return (
    <div className="newTaskPanel">
        <input className='newTaskInput' type="text" placeholder='Task' value={taskText} onChange={e => setTaskText(e.target.value)}/>
        <div className="coloredBtns">
          <div className="colorBtn coral selected" onClick={(e) => {selectColor(e); setSelectedColor("coral")}} ref={coralBtn}></div>
          <div className="colorBtn lime" onClick={(e) => {selectColor(e); setSelectedColor("lime")}} ref={limeBtn}></div>
          <div className="colorBtn cyan" onClick={(e) => {selectColor(e); setSelectedColor("cyan")}} ref={cyanBtn}></div>
          <div className="colorBtn yellow" onClick={(e) => {selectColor(e); setSelectedColor("yellow")}} ref={yellowBtn}></div>
        </div>
      <button className="addTaskBtn" onClick={() => {addTask(taskText, selectedColor); setTaskText("");}}>Add Task</button>
    </div>
  )
}

export default NewTaskPanel