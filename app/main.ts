/**
 * 
 * 
 * 
 * 
 * 
 */

import { serve } from "https://deno.land/std@0.50.0/http/server.ts";

const s = serve({ port: 8080 }); // さっきコンテナに指定したポート
console.log("localhost");

for await (const req of s) {
  req.respond({ body: "<h1>Hello Deno</h1>\n" });
}
