import { Elysia } from "elysia";
import { userRoute } from "./user";

export const api = new Elysia({ prefix: "/api" }).use(userRoute);
