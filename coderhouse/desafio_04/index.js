const express =require('express')
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const Container=require('../desafio_02/container.js');
const container =new Container('../desafio_02/cars.json')



//metodo get//

app.get('/api/products' ,async(req,res)=>{ 
	const prod=await container.getAll()
	res.status(200).send(prod);
});

app.get('/api/products/:id',async(req,res)=>{
	const id =req.params.id;
	const byId=await container.getById(id);
 	res.status(200).send(JSON.stringify(byId));
	 })

//metodo post//
app.post('/api/products',(req,res)=>{
        const {body}=req;
	container.save(body);
	res.status(200).send(`Producto agregado:(JSON.parse(body)`);
});

app.put('/api/products/:id',(req,res)=>{
	const {id}=req.params;
       	const{body}=req;
        container.getById(id);
	index=obj.indexOf();
	obj[index]=body;
	if(err){ res.status(400).send('El id proporcionado no corresponde a un producto de la l    ista')}
        else{res.status(200).send("Producto actualizado")}
});

app.delete('/api/products/:id', async(req,res)=>{
        const id=req.params.id;
	container.deletebyId(id)
	res.status(200).send(`El producto con id: ${ id} ha sido eliminado`)}

);


const PORT=8081
const server=app.listen(PORT,()=>
         console.log(`server started on http://localhost:8081`));
 
server.on("error",(err)=>console.log(err));

