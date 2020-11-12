import { renderFileToString } from "https://deno.land/x/dejs/mod.ts";
import { select } from '../models/pg_model.ts';

const home = async({response} : {response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            //nama : "Endah",
            pemrograman : await select()
            //mahasiswa : [
                //{nim : "01","nama":"Endah"},
                //{nim : "02","nama":"Dila"},
                //{nim : "03","nama":"Kurniawati"}
            //]
        },
        subview : {
            namafile : "./views/blog-main.ejs",
            showtemplate : true
        }
    });
    response.body = new TextEncoder().encode(html);
}
const signup = async({response} : {response : any}) => {
    const html = await renderFileToString("./views/home.ejs", {
        data : {
            pemrograman : await select()
        },
        subview : {
            namafile : "./views/signup.ejs",
            showtemplate : false
        }
    });
    response.body = new TextEncoder().encode(html);
}

const saveuser = async({request, response} : {request : any, response : any}) => {
    const result = await request.body().value;
    const parseData = new URLSearchParams(result);

    const namalengkap = parseData.get("fullname");
    const namauser = parseData.get("username");
    const pwd = parseData.get("paswd");

    response.body = "data yang di POST : " +namalengkap+ "," +namauser+ "," +pwd;
}
const kategori = async({params, response}: {params : {id : string}, response:any})  => {
    response.body = "ID Parameter : "+params.id;
}
export { home, signup, saveuser, kategori }