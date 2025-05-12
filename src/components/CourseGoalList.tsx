import { CourceGoalType } from "../types";
import CourseGoal from "./CourseGoal";

export interface CourseGoalListProps {
    goalsList : CourceGoalType[];
};

export default function CourseGoalList({ goalsList }: CourseGoalListProps) {
    return (
        <ul>
        {goalsList.map( (goal) => (
          <li key={goal.id}>
            <CourseGoal 
              title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
    </ul>
    )
}