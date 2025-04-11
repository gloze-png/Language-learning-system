import { pgTable, serial, text, foreignKey, integer } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const courses = pgTable("courses", {
	id: serial().primaryKey().notNull(),
	title: text().notNull(),
	imageSrc: text("image_src").notNull(),
});

export const userProgress = pgTable("user_progress", {
	userId: text("user_id").primaryKey().notNull(),
	userName: text("user_name").default('user').notNull(),
	userImageSrc: text("user_image_src").default('/logo.png').notNull(),
	activeCourseId: integer("active_course_id"),
	hearts: integer().default(5).notNull(),
	points: integer().default(0).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.activeCourseId],
			foreignColumns: [courses.id],
			name: "user_progress_active_course_id_courses_id_fk"
		}).onDelete("cascade"),
]);
