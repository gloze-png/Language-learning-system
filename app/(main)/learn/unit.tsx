import { lessons, units } from "@/db/schema";

type Props ={
  id:number;
  order:number;
  title:string;
  description:string;
  lessons:(typeof lessons.$inferSelect & {
    completed:boolean;
  })[];
  activeLesson:typeof lessons.$inferSelect & {
    unit:typeof units.$inferSelect;
    } | undefined;
    activeLessonPercentage: number;
  };
  export const Unit = ({
    id,
    order,
    title,
    description,
    lessons,
    activeLesson,
    activeLessonPercentage,
  } : Props) =>{
    return(
      <div></div>
    );
  };