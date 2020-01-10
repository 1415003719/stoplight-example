const koa = require('koa');

const trackingRouter = require('./routers/tracking')

const app = new koa();
const PORT = 3000

app.use(trackingRouter.routes()).use(trackingRouter.allowedMethods());

app.listen(PORT, () => {
    console.log("app start in " + PORT);
})
