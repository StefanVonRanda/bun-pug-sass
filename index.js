const server = Bun.serve({
  port: 5555,
  async fetch(req) {
    const path = new URL(req.url).pathname;
    if (path === "/") return new Response(Bun.file(`dist/index.html`));
    else { return new Response(Bun.file(`dist${path}`)); }
  },
});

console.log(`Listening on ${server.url}`);