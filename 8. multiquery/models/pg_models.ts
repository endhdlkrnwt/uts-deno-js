import { Client } from 'https://deno.land/x/postgres/mod.ts';
import { QueryResult, QueryConfig } from 'https://deno.land/x/postgres/query.ts';

const client = new Client({
    hostname : "localhost",
    port : 5432,
    user : "postgres",
    password : "admin123",
    database : "db_blog"
});

export async function select(query : QueryConfig | QueryConfig[]):Promise<any[]>{
    
    let tables : any = [];
    let hasil : QueryResult | QueryResult[];
    try {
        await client.connect();
        if(Array.isArray(query)){
            hasil = await client.multiQuery(query);
            hasil.forEach((obj) =>{
                tables.push(obj.rowsOfObjects() );
            });
        }else{
            hasil = await client.query(query);
            tables = hasil.rowsOfObjects();
        }
        await client.end();
    }catch (error){
        console.log(error);
    }
    return tables;
}