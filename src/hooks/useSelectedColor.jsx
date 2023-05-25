import { useState } from "react";

export function useSelectedColor() {
    const [selectedColor, setSelectedColor] = useState("coral");
    return {selectedColor, setSelectedColor};
}