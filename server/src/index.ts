import { Elysia, t } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { api } from "./api/api";

const app = new Elysia()
  .use(staticPlugin({ prefix: "/", assets: "./client/dist" }))
  .use(api)
  .get("/healthcheck", () => "Hello Elysia")
  .get(
    "/test",
    ({ error, request }) => {
      if (!request.url) return error(404, "Not found");
      return { test: "Successful", code: 200 };
    },
    {
      response: {
        200: t.Object({ test: t.String(), code: t.Number() }),
        404: t.String(),
      },
    },
  )
  .onError(({ code, redirect }) => {
    if (code === "NOT_FOUND") {
      return redirect("/");
    }
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
