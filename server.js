const express = require("express");
const next = require("next");
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

const options = {
  root: __dirname + "/static/",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  }
};

(async () => {
  await app.prepare();
  const server = express();

  server.get("/robots.txt", (req, res) => {
    return res.status(200).sendFile("robots.txt", options);
  });

  server.get("*", (req, res) => handle(req, res));
  await server.listen(port);
  console.log(`> Hey on http://localhost:${port}`); // eslint-disable-line no-console
})();

const nextI18next = require('./i18n');
(async () => {
  await app.prepare();
  const server = express();

  await nextI18next.initPromise;
  server.use(nextI18NextMiddleware(nextI18next));

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})();
