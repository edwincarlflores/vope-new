import { Elysia } from "elysia";
import { userRoute } from "./routes/user";

const app = new Elysia({ prefix: "/api" })
  .use(userRoute)
  .get("/", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
