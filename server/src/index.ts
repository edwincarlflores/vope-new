import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { api } from "./api/api";

const app = new Elysia()
  .use(staticPlugin({ prefix: "/", assets: "./client/dist" }))
  .use(api)
  .get("/healthcheck", () => "Hello Elysia")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
