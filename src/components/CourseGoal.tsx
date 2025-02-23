import { type ReactNode } from "react";

interface CourseGoalProps {
    title: string; 
    children: ReactNode
}

// Another approach to get children props
// import { type PropsWithChildren} from "react";
// type CourseGoalProps = PropsWithChildren<{title: string}>;

export default function CourseGoal( {title, children}: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button>Delete</button>
    </article>
}