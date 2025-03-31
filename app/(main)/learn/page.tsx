import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress } from "@/db/queries";
import { redirect } from "next/navigation";

const LearnPage =async () => {
  const userProgressData = getUserProgress();

  const[
    userProgress,
  ] = await Promise.all([
    userProgressData
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
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;



