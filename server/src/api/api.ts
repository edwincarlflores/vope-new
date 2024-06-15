import { Elysia } from "elysia";
import { userRoute } from "./user";
import { topicRoute } from "./topic";

export const api = new Elysia({ prefix: "/api" })
  .use(userRoute)
  .use(topicRoute);
