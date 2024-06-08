import { Elysia, t, type Static } from "elysia";

const UserSchema = t.Object({
  id: t.Number(),
  name: t.String(),
  email: t.String({ format: "email" }),
});

export type User = Static<typeof UserSchema>;

export const userRoute = new Elysia({ prefix: "/user" }).get(
  "/",
  () => {
    const user: User = {
      id: 1,
      name: "John Doe",
      email: "jd@test.com",
    };
    return user;
  },
  {
    response: UserSchema,
  },
);
