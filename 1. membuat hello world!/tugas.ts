import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();

app.use((context) => {
  context.response.body = "Hello World!";
});

console.log("Service bejalan di port 8000");
await app.listen({ port: 8000 });
