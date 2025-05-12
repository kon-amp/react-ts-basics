import { PropsWithChildren} from "react";

// interface CourseGoalProps {
//     title: string;
//     children: ReactNode
// }

// Another approach to get children props
// import { type PropsWithChildren} from "react";
type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
}>;

export default function CourseGoal( {title, id, children, onDelete}: CourseGoalProps) {
    return <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </article>
}

// Another approach instead of using function
// const CourseGoal = ({title, children} : CourseGoalProps) => {
// const CourseGoal: FC<CourseGoalProps> = ({title, children}) => {
//     return (<article>
//         <div>
//             <h2>{title}</h2>
//             {children}
//         </div>
//         <button>Delete</button>
//     </article>
//     );
// };

// export default CourseGoal;
