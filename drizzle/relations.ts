import { relations } from "drizzle-orm/relations";
import { courses, userProgress } from "./schema";

export const userProgressRelations = relations(userProgress, ({one}) => ({
	course: one(courses, {
		fields: [userProgress.activeCourseId],
		references: [courses.id]
	}),
}));

export const coursesRelations = relations(courses, ({many}) => ({
	userProgresses: many(userProgress),
}));