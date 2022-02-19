class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre=nombre;
        this.apellido=apellido;
        this.libros=libros;
        this.mascotas=mascotas;
    }

getFullName(){
	return `Nombre: ${this.nombre}\nApellido: ${this.apellido}`
}

addMascotas(nuevaMascota){
    this.mascotas.push(nuevaMascota);

}

countMascotas(){
 
    return this.mascotas.length;
}

addBook(nombre,autor){
	// { clave: valor }
   this.libros.push({nombre:nombre,autor:autor})

}

getBookName(){
	return this.libros.map((el)=>el.nombre)
    
}
}

const usuario = new Usuario ("Agustina", "Scarpinelli",[],[])

console.log(usuario.getFullName());
usuario.addBook("la odisea","Homero");
usuario.addBook("harry potter","Rowling");
usuario.addMascotas("huron");
usuario.addMascotas("huron");
usuario.addMascotas("huron");
console.log(usuario.countMascotas());
console.log(usuario.getBookName());
