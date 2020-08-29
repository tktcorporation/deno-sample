import { Application } from "https://deno.land/x/oak/mod.ts";
import router from "./router.ts";

const env = Deno.env.toObject();
const HOST = env.HOST || "0.0.0.0";
const port = Number.parseInt(env.PORT) || 8080;

// const app = new Application();

// app.use(router.routes());
// app.use(router.allowedMethods());

// console.log(`Listening on port ${PORT} ...`);
// await app.listen(`${HOST}:${PORT}`);

// const port = 8000;
const app = new Application();

app.use((ctx) => {
  ctx.response.body = "Hello Deno";
});

app.addEventListener("listen", () => {
  console.log(`Listening on localhost:${port}`);
});

await app.listen({ port });
