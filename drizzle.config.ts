// import "dotenv/config";
// import type { Config} from "drizzle-kit";

// export default {
//   schema: "./db/schema.ts",
//   out: "./drizzle",
//   driver: "postgres",
//   dbCredentials: {
//     url: process.env.DATABASE_URL!, // Use 'url' instead of 'connectionString' if required

//   },
// } satisfies Config;


// import { defineConfig } from "drizzle-kit";
// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./db/schema.ts",
//   out: "./drizzle",
// });

import "dotenv/config";
import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
})
