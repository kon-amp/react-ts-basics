import { CourceGoalType } from "../types";
import CourseGoal from "./CourseGoal";

export interface CourseGoalListProps {
    goalsList : CourceGoalType[];
    onDeleteGoal: (id: number) => void; 
};

export default function CourseGoalList({ goalsList, onDeleteGoal }: CourseGoalListProps) {
    return (
        <ul>
        {goalsList.map( (goal) => (
          <li key={goal.id}>
            <CourseGoal 
              title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
    </ul>
    )
}