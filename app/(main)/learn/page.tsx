import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";

const LearnPage = () => {
  return (
    <div className="flex flex-row-reverse gap-[20px] px-6">
      <StickyWrapper>
        <UserProgress
        activeCourse={{ title: "Spanish", imageSrc: "/es.svg" }}
        hearts={5}
        point={100} // points was suppose to be there 
        hasActiveSubscription={false}/>
      </StickyWrapper>
      <FeedWrapper>
        <Header title="Spanish"/>
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;



