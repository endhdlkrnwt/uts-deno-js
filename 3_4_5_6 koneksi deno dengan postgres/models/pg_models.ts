import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { QueryResult } from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "postgres",
    password : "admin123",
    database : "db_blog"
});

export async function select():Promise<any[]>{
    let tables : any = [];
    try{
        await client.connect();
        let hasil : QueryResult = await client.query("select * from tb_kategori");
        tables = hasil.rowsOfObjects();
        await client.end();
    }catch (error){
        console.log(error);
    }
    return tables;
}
