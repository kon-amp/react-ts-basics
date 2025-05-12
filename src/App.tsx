import { useState } from 'react';

import goalsImg from './assets/goals.jpg';
import Header from './components/Header.tsx';
import { CourceGoalType } from './types.ts';
import CourseGoalList from './components/CourseGoalList.tsx';

export default function App() {
  const [goals, setGoals] = useState<CourceGoalType[]>([]);

  function addGoalHandler() {
    setGoals( (prevGoals) => {
      const newGoal: CourceGoalType = {
        title: "Learn React + TS",
        description: "Learn it in depth!",
        id: Math.random()
      };
      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(id: number) {
    setGoals( prevGoals => prevGoals.filter( (goal) => goal.id !== id));
  }

  return <main>
    <Header image={{ src: goalsImg, alt: "A list of goals"}}> 
      <h1>Your Course Goals</h1>
    </Header>
    <button onClick={addGoalHandler}>Add Goal</button>
    <CourseGoalList goalsList={goals} onDeleteGoal={deleteGoalHandler}></CourseGoalList>
  </main>;
}
