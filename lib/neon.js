import { createClient } from "@neondatabase/serverless";

export const neonClient = createClient({
  uri: process.env.NEXT_PUBLIC_POSTGRES_URL,
  user: process.env.NEXT_PUBLIC_POSTGRES_USER,
  password: process.env.NEXT_PUBLIC_POSTGRES_PASSWORD,
});
