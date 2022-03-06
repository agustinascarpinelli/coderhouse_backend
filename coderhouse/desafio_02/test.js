const Container=require('./container.js');
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
const byId=await cars.getById(6)
console.log(`${JSON.stringify(byId)}`);
await cars.deletebyId(4);
}
test();
