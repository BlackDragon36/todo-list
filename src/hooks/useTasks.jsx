import { useState } from "react";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    return {tasks, setTasks};
}