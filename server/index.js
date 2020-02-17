const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'content-type');
    await next();
});

app.use(async ctx => {
    if (ctx.req.url === '/') {
        ctx.body = 'Hello World';
    }
    else if (ctx.req.url === '/test500') {
        ctx.body = 'Internal Server Error';
        ctx.status = 500;
    }
    else if (ctx.req.url === '/file.js') {
        ctx.set('Content-Type', 'text/javascript');
        ctx.body = `
            const btn = document.querySelector('#btn-cors-error');
            btn.addEventListener('click', () => {
                var a = b;
            });
        `;
    }
});

app.listen(3000);
