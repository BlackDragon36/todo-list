import { useRef } from "react";

export function useColoredBtns() {
    const coralBtn = useRef(null);
    const limeBtn = useRef(null);
    const cyanBtn = useRef(null);
    const yellowBtn = useRef(null);
    return {coralBtn, limeBtn, cyanBtn, yellowBtn};
}