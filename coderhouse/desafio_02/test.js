module.exports=Class Product
module.exports=Class Container
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


