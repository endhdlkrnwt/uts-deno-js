import {Router} from 'https://deno.land/x/oak/mod.ts';
import { home, signup, saveuser, kategori } from './controllers/blog.ts';

const router = new Router();

router
    .get("/", home)
    .get("/daftar", signup)
    .post("/simpanuser", saveuser)
    .get("/kategori/:id", kategori)
    .get("/tentang", (ctx) => {
        ctx.response.body = "ini halaman tentang";
    });

export default router;
