import { cache} from "react";

import db from "@/db/drizzle";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { userProgress,courses, units, challenges, challengeProgress } from "@/db/schema";


export const getUserProgress = cache(async ()=>{
  const { userId } = await auth();
  
  if (!userId){
    return null;
  }
  const data = await db.query.userProgress.findFirst({
    where: eq (userProgress.userId, userId),
    with:{
      activeCourse: true,
    },
  });
  return data;
});

export const getUnits = cache(async ()=>{
  const {userId} = await auth();
  const userProgress = await getUserProgress();

  if ( !userId || !userProgress?.activeCourseId){
    return [];
  }

  //Todo: confirm orders
  const data = await db.query.units.findMany({
    where: eq(units.courseId, userProgress.activeCourseId),
    with:{
      lessons:{
        with:{
          challenges:{
            with:{
              challengeProgress:{
                where:eq(
                  challengeProgress.userId,
                  userId,
                ),
              }
            },
          },
        },
        
      },
    },
  });
  const normalizedData = data.map((unit) =>{
    const lessonsWithCompletedStatus = unit.lessons.map((lessons) => {
      const allCompletedChallenges = lessons.challenges.every((challenge)=>{
        return challenge.challengeProgress 
        && challenge.challengeProgress.length >0
        && challenge.challengeProgress.every((progress) => progress.completed);
      });
      return { ...lessons, completed: allCompletedChallenges};
    });
    return {...units, lessons: lessonsWithCompletedStatus};
  });
  return normalizedData;
});

export const getCourses = cache(async () => {
  const data = await db.query.courses.findMany ();

  return data;
  });

  export const getCourseById = cache(async (courseId:number)=>{
    const data = await db.query.courses.findFirst({
      where:eq(courses.id, courseId)
      //TODO: Populate units and lessons
    });
    return data;
});