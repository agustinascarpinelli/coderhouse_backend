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
          console.log("Erro al leer el archivo")
		 return null;}

 }
}


async function test(){        
  const cars=new Container ('cars.json');
	const car1={                       
           title:'tesla',
	   price:2000,
	   thumbnail:'url1'
}
await cars.save(car1);
const car2={
           title:'audi',
           price:3000,
           thumbnail:'url2'
}
await cars.save(car2);
const car3={
           title:'mercedes benz',
           price:5000,
           thumbnail:'url3'
}
await cars.save(car3);
const products= await cars.getAll();
console.log(`El conjunto de productos es:${JSON.stringify(products)}`)
}
test();

