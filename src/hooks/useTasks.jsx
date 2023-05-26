import { useState } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    function addTask(text, selectedColor) {
        if(text !== "") {
            setTasks([...tasks, {text: text, color: selectedColor}]);
        }
    }
    return {tasks, setTasks, addTask};
}