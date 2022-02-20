const fs=require('fs');
class contenedor {
 constructor (archivo){	 
  this.archivo=archivo
  this.id=0;
  	 
   }
       

async save(producto){
         producto.id=this.id
	 await fs.promises.readFile(this.archivo, 'UTF-8')
	.then(archivo=>JSON.parse(archivo))
	.then(archivo=>{
            if (archivo.length!=0){
		    producto.id=archivo[archivo.length-1].id +1;
		    this.id=producto.id;
}
archivo.push(producto);
return archivo;      
     })
	.then(archivo=>{
		fs.promises.writeFile(this.archivo,JSON.stringify(archivo))
			.catch(err=>console.log(err))

 })
	.catch(err=>{
		console.log(err);
		fs.promises.writeFile(this.archivo,JSON.stringify([producto]))
		.catch(err=>console.log(err))
		this.id=null; 
		}); 
 return this.id;
}


async getById(number){
        try {
	const contenido= await fs.promises.readFile(this.archivo,'UTF-8')
        const prod=JSON.parse(contenido);
        	if(prod !=null){ 
		const obj=prod.find(obj=>obj.id==number);
		return obj;
} 
	else{console.log("no existe el producto con ese indice")
	return null;
	}
        }catch(err){
		console.log("err")}
}






	




async getAll(){
	try{
	const contenido=await fs.promises.readFile(this.archivo,'UTF-8')
	const prod=JSON.parse(contenido);
	return prod;
        }catch(err){
	console.log(err);
	return null; }

 }



async deleteById(number){

          
	const productos=await fs.promises.readFile(this.archivo,'UTF-8',(err,contenido)=> {

            if (err){
	    console.log("no hay productos para borrar")
	    }
            else{
            productos=JSON.parse(contenido);
            const producto=productos.find(producto=>producto.id(number));
              try{
                if (producto.length ==0){
                console.log(`No se encontro el producto con el id ${number}`)
		}
		else{
                const indice= productos.indexOf(producto);
		productos.slice(indice,1);
		
		console.log("Producto eliminado");
		}      
	      }
	     catch {
	     console.log(`No se encontro el producto con el id ${number}`)
	   }
	}
     });
 }

deleteAll(){
fs.unlink(this.archivo,err=>{
 if(err){
 console.log("No se pudieron eliminar todos los productos")
 }
 else{
 console.log("Fueron eliminados todos los productos")
     }
    });
 }
}


async function prueba (){  
const autos=new contenedor ('autos.json');
const auto={
	title:"audi",
	price:20000,
        thumbnail:"url1"
}

await autos.save(auto);
const auto2={
        title:"Mercedes Benz",
        price:25000,
        thumbnail:"url2"
}
await autos.save(auto2);
const auto3={
        title:"tesla",
        price:30000,
        thumbnail:"url3"
}
await autos.save(auto3);



const producto=await autos.getById(2);
console.log(`EL producto encontrado es: ${JSON.stringify(producto)}`)
await autos.deleteById(3);
const productos=await autos.getAll();
console.log(`EL conjunto de productos es: ${JSON.stringify(productos)}`)
}

prueba();


















