import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const course = pgTable("courses",{
  id: serial("id").primaryKey(),
  title:text ("title").notNull(),
  imageSrc:text("image_src").notNull(),
});