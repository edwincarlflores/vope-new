import { Elysia } from "elysia";

export const userRoute = new Elysia({ prefix: "/user" }).get("/", () => {
  return { id: 1, name: "John Doe", email: "jd@test.com" };
});
