import { renderToReadableStream } from "react-dom/server";

function Component(props) {
  return (
    <body>
      <h1>{props.message}</h1>
    </body>
  );
}

Bun.serve({
  port: 8081,
  async fetch(req) {

    const url = new URL(req.url);
    let component = "";

    switch (url.pathname) {
      case "/":
        component = <Component message={"Welcome to the Bun server running on Plesk through Docker!"}/>;
        break;
      default:
        component = <Component message={"Hello from server at " + url.pathname} />;
        break;
    }

    const stream = await renderToReadableStream(component);
    return new Response(stream, {
      headers: { "Content-Type": "text/html" },
    });
  },
});

console.log("Bun listening on port 8081");