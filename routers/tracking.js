const Router = require("koa-router");

const trackingRouter = new Router();

trackingRouter.prefix("/trackings");

trackingRouter.get("/", ctx => {
  ctx.body = [
    {
      id: "xxxxxx",
      slug: "abc"
    }
  ];
});

trackingRouter.post("/", ctx => {
  const body = ctx.body;
  ctx.body = body;
});

module.exports = trackingRouter;
