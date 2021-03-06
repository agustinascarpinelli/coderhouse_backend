const fs=require ('fs');


class Container  {
 constructor (fileName){ 
  this.filename=fileName;
  this.id=0;
  this.products=[]
   }

 async save (product){ 
  product.id=this.id;
  await fs.promises.readFile(this.filename,'UTF-8')
	 .then(fileName=>JSON.parse(fileName))
	 .then(fileName=>{
		 if(fileName.length!=0){
			 product.id=fileName[fileName.length-1].id+1
			 this.id=product.id;
}
fileName.push(product);
return fileName;
     })
	 .then(fileName=>{
		 fs.promises.writeFile(this.filename,JSON.stringify(fileName))
		 .catch(err=>console.log("No se pudo escribir el archivo"));
        })
	 .catch(err=>{
                 console.log(err);
	 fs.promises.writeFile(this.filename,JSON.stringify([product]))
                 .catch(err=>console.log("No se pudo agregar el producto"))
		 this.id=null;
        });
return this.id;
 }

 async getAll (){
	 try{
            const content=await fs.promises.readFile(this.filename,'UTF-8')
            const prod=JSON.parse(content);
		 return prod;
}
catch(err){
          console.log("Error al leer el archivo")
		 return null;}
}

async getById(id){
	return await fs.promises.readFile(this.filename,'UTF-8')
	.then(file=>JSON.parse(file))
	.then(file=>file.filter(obj=>obj.id===id))
        .catch(err=>
          console.log("Error al leer el archivo"))

          }

async deletebyId(idd){
        await fs.promises.readFile(this.filename,'UTF-8')
        .then(file=>JSON.parse(file))
	.then(file=>file.filter(obj=>obj.id != idd))
	.then(async file=>{
                await fs.promises.writeFile(this.filename,JSON.stringify(file))	    
	})
.catch(err=>
          console.log("Error al eliminar el producto del archivo"))

}

async deleteAll(){
        try{
            await fs.promises.unlink(this.filename)
	   console.log("productos borrados del archivo")   
	}catch(err){
	console.log("Error al borrar productos del archivo")
}
}

}


module.exports=Container;
