import { EventContext } from "@cloudflare/workers-types";

export function onRequest(context: EventContext<any, any, any>) {
  console.log("Hello")
  return new Response("Thomas");
}
