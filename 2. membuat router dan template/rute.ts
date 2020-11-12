import { Router } from "https://deno.land/x/oak/mod.ts";
import { renderFileToString } from "https://deno.land/x/dejs/mod.ts";

const router = new Router();

router
  .get("/", async (ctx) => {
    const html = await renderFileToString("./views/home.ejs", {
      data: {
        nama: "Endah",
        pemrograman: ["PHP", "Javascript", "NodeJS"],
        mahasiswa: [
          { nim: "01", "nama": "Endah" },
          { nim: "02", "nama": "Dila" },
          { nim: "03", "nama": "Kurniawati" }
        ]
      }
    });
    ctx.response.body = new TextEncoder().encode(html);
  })
  .get("/kategori", (ctx) => {
    ctx.response.body = "Ini halaman kategori";
  })
  .get("/tentang", (ctx) => {
    ctx.response.body = "Ini halaman tentang";
  });

export default router;