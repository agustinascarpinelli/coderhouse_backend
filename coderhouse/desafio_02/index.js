const fs=require('fs');
class Product {
 constructor (title, price, thumbnail){ 
  this.title=title;
  this.price=price;
  this.thumbnail=thumbnail;
   }
 }
class Container {
 constructor (nombreArchivo){	 
  this.filename=nombreArchivo;
  this.id=0;
  this.products=[]; 
   }
	       

async save(produc){
	await this.getAll()
	this.id++
	produc.id=this.id
	this.products.push(produc)
	try{ 
	 await fs.promises.writeFile(this.filename, JSON.stringify(this.products))
		return this.id; 
	}catch(err){
        console.log(err);
        }
 }


async getAll(){
	try{
	const content=await fs.promises.readFile(this.filename, 'UTF-8')
        const prod=JSON.parse(content)
        this.products=prod;
	this.products.map((prod)=>{ 
             if (prod.id && this.id<prod.id){ 
	     this.id=prod.id
	     }
	})
		return this.products;
        }catch(err){
	console.log(err);
	}
}

}

async function test(){
const container= new Container('products.json')


const p1= new Product('tesla',1000,'src1')
 await container.save(p1);
const p2=new Product('mercedes benz',2000,'src2')
 await container.save(p2);

const p3=new Product('audi',3000,'src3')

await container.save(p3);
const products= await container.getAll()
console.log (`Productos :${JSON.stringify(products)}`)
}
test();









