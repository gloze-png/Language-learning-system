import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUnits, getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";
import { Unit } from "./unit";

const LearnPage =async () => {
  const userProgressData = getUserProgress();
  const unitsData = getUnits();

  const[
    userProgress,
    units,
  ] = await Promise.all([
    userProgressData,
    unitsData,
    getUnits(),
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[20px] px-6">
      <StickyWrapper>
        <UserProgress
        activeCourse={userProgress.activeCourse}
        hearts={userProgress.hearts}
        point={userProgress.points} // points was suppose to be there 
        hasActiveSubscription={false}/>
      </StickyWrapper>
      <FeedWrapper>
        <Header title={ userProgress.activeCourse.title}/>
        {units.map((unit) =>(
          <div key={unit.id} className="mb-10">
         <Unit
         id={unit.id}
         order={unit.order}
         description = {unit.description}
         title ={unit.title}
         lessons = {unit.lessons}
         activeLesson ={undefined}
         activeLessonPercentage = {0}
         />
          </div>
        ))}
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;


