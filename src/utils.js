import { useState } from "react";

export function handleUpdateProperty(e, i, state, stateSetter) {
  const { name, value } = e.target;
  const list = [...state];
  list[i][name] = value;
  stateSetter(list);
}
export function handleRemove(i, state, stateSetter) {
  const list = [...state];
  list.splice(i, 1);
  stateSetter(list);
}
export function handleAdd(state, stateSetter, property) {
  
  stateSetter([...state, { [property]: "" }]);
}
export function handleAddWithDate(state, stateSetter, property) {

  stateSetter([...state, { date:'',[property]: "" }]);
}


export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
