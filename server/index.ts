import { Router, Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";

const router = new Router();
router.get('/', (context) => {
context.response.body = 'Server is listerning on 8000';
});
router.get('/products', async (context) => {
    const text = await Deno.readTextFile('./product.json')
    context.response.headers.set('Content-Type', 'application/json')
    context.response.body = text;
});


const app = new Application();
app.use(
    oakCors({
        origin: "http://localhost:5173"
      }),
)
app.use(router.routes());
app.use(router.allowedMethods());

console.log('Server is listening on 8000');
await app.listen({ port: 8000 });