import { useState } from "react";

export function useTaskText() {
    const [taskText, setTaskText] = useState("");
    return {taskText, setTaskText};
}