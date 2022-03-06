const express =require('express')
const Container=require('./productos.js');
const container =new Container('cars.json');
const app=express();
const PORT=8080;


function getRandom(min, max){
	return  Math.floor(Math.random() * (max+1-min))+min;

}
app.get('/',(req,res)=>{
        res.send(`<h1 style="background-color:red;">Bienvenido a AUTOS</h1>`);
})


app.get('/products', async(req,res)=>{
	
	const prods=await Container.getAll();
	let html = `<h1 style="background-color:blue;">Autos disponibles</h1>`;
	html+=`<ul>`;
	html+=`<li>Nombre</li>`;
	html+=`<li>Precio</li>`;
	html+=`<li>Foto</li>`;
	html+=`</ul>`;
	 for (let p of prods){
		   html+=`<ul>`;
                   html+=`<li>"${p.title}"</li>`;
                   html+=`<li>"${p.price}"</li>`;
                   html+=`<li>"${p.thumbnail}"</li>`;
                   html+=`</ul>`;
}
        res.send(html);
})

app.get('/randomProducts',async(req,res)=>{
             const prods=await container.getAll();
             const id=getRandom(1,prods.length)
	     const prod=prods[i]
             let html = `<h1 style="background-color:blue;">Auto al azar</h1>`;
             html+=`<ul>`;
             html+=`<li>"${prod.title}"</li>`;
             html+=`<li>"${prod.price}"</li>`;
             html+=`<li>"${prod.thumbnail}"</li>`;
             html+=`</ul>`;

        res.send(html);
})


const server=app.listen(PORT,()=>{

        console.log(`Servidor escuchando en http://localhost:${PORT}`)
 })

